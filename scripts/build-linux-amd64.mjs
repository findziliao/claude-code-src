#!/usr/bin/env node

import { spawn } from "child_process";
import { chmod, mkdir, rm, writeFile } from "fs/promises";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

import { unzipSync } from "fflate";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const distDir = join(projectRoot, "dist");
const cacheRoot = join(projectRoot, "node_modules", ".cache", "bun-cross");
const target = "bun-linux-x64-baseline";
const entrypoint = "src/entrypoints/cli.tsx";
const outputFile = join(distDir, "myclaude-linux-amd64");

function run(command, args, options = {}) {
  return new Promise((resolvePromise, rejectPromise) => {
    const child = spawn(command, args, {
      cwd: projectRoot,
      stdio: options.captureOutput ? ["ignore", "pipe", "pipe"] : "inherit",
      shell: false,
    });

    let stdout = "";
    let stderr = "";

    if (options.captureOutput) {
      child.stdout?.on("data", (chunk) => {
        stdout += chunk.toString();
      });
      child.stderr?.on("data", (chunk) => {
        stderr += chunk.toString();
      });
    }

    child.on("error", rejectPromise);
    child.on("close", (code) => {
      if (code === 0) {
        resolvePromise({ stdout, stderr });
        return;
      }
      rejectPromise(
        new Error(
          options.captureOutput
            ? stderr.trim() || `${command} exited with code ${code}`
            : `${command} exited with code ${code}`,
        ),
      );
    });
  });
}

function sleep(ms) {
  return new Promise((resolvePromise) => {
    setTimeout(resolvePromise, ms);
  });
}

async function removeIfExists(path, attempts = 10) {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      await rm(path, { force: true });
      return;
    } catch (error) {
      const code = error && typeof error === "object" ? error.code : undefined;
      if ((code === "EBUSY" || code === "EPERM") && attempt < attempts) {
        await sleep(500);
        continue;
      }
      throw error;
    }
  }
}

async function ensureLinuxRuntime(version) {
  const runtimeDir = join(cacheRoot, `${target}-v${version}`);
  const runtimePath = join(runtimeDir, "bun");
  const url = `https://github.com/oven-sh/bun/releases/download/bun-v${version}/${target}.zip`;

  try {
    await chmod(runtimePath, 0o755);
    console.log(`Using cached runtime: ${runtimePath}`);
    return runtimePath;
  } catch {
    console.log(`Downloading ${target} runtime for Bun ${version}...`);
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status} ${response.statusText}`);
  }

  const archive = new Uint8Array(await response.arrayBuffer());
  const files = unzipSync(archive);
  const normalizedPaths = Object.keys(files).map((file) => file.replace(/\\/g, "/"));
  const topLevelDirs = new Set(
    normalizedPaths.map((file) => file.split("/")[0]).filter(Boolean),
  );
  const stripPrefix =
    normalizedPaths.includes("bun") || topLevelDirs.size !== 1
      ? ""
      : `${[...topLevelDirs][0]}/`;

  await rm(runtimeDir, { force: true, recursive: true });
  await mkdir(runtimeDir, { recursive: true });

  for (const [relativePath, content] of Object.entries(files)) {
    const normalizedPath = relativePath.replace(/\\/g, "/");
    const archivePath = stripPrefix && normalizedPath.startsWith(stripPrefix)
      ? normalizedPath.slice(stripPrefix.length)
      : normalizedPath;

    if (!archivePath || archivePath.endsWith("/")) {
      await mkdir(join(runtimeDir, archivePath), { recursive: true });
      continue;
    }

    const destination = join(runtimeDir, archivePath);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, content);
  }

  await chmod(runtimePath, 0o755);
  return runtimePath;
}

async function main() {
  const { stdout } = await run("bun", ["--version"], { captureOutput: true });
  const bunVersion = stdout.trim();

  if (!bunVersion) {
    throw new Error("Unable to detect Bun version.");
  }

  await mkdir(distDir, { recursive: true });
  const runtimePath = await ensureLinuxRuntime(bunVersion);
  await removeIfExists(outputFile);

  console.log(`Building ${target} executable...`);
  await run("bun", [
    "build",
    entrypoint,
    "--compile",
    `--target=${target}`,
    "--compile-executable-path",
    runtimePath,
    "--outfile",
    outputFile,
  ]);

  console.log(`Built ${outputFile}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
