# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository is a reverse-engineered/decompiled version of Anthropic's Claude Code CLI. The practical goal is to keep core CLI behavior running under Bun while secondary/internal features are stubbed or disabled.

Important reality of this codebase:
- TypeScript has many decompilation artifacts (large `unknown`/`never`/`{}` error volume).
- Runtime behavior (Bun execution) is the primary correctness target, not a clean `tsc` pass.

## Environment & Prerequisites (from README)

- Bun >= 1.3.11 (required)
- Node.js >= 18 (some dependencies require it)
- Valid credentials for one provider: Anthropic API key, or Bedrock/Vertex/Azure setup

## Development Commands

```bash
# Install dependencies
bun install

# Run CLI in dev mode
bun run dev
# same as: bun run src/entrypoints/cli.tsx

# Pipe mode
echo "say hello" | bun run src/entrypoints/cli.tsx -p

# Build distributable bundle
bun run build
# outputs dist/cli.js
```

### Lint / Typecheck / Tests status

- Lint: `@biomejs/biome` is in devDependencies but no `lint` script is wired in `package.json`. You can run it directly:
  ```bash
  bun x biome check src/
  ```
- Tests: no test runner is configured in this repository.
- Type check exists but is not a quality gate in this repo due to decompilation noise:
  ```bash
  bun x tsc --noEmit
  ```

### Automation scripts (`scripts/`)

- `create-type-stubs.mjs` — generate stub type declarations for internal packages
- `fix-default-stubs.mjs` / `fix-missing-exports.mjs` — patch decompilation export issues
- `remove-sourcemaps.mjs` — strip sourcemap references from decompiled output

## High-Level Architecture

### 1) Startup and bootstrap flow

- `src/entrypoints/cli.tsx` is the true entrypoint.
- It injects runtime polyfills/macros before loading the rest of the app, then decides fast-paths (e.g. `--version`) vs full startup.
- For normal startup it dynamically imports `src/main.tsx`.

Why this matters: if behavior differs between build-time and dev-time, start by checking `cli.tsx` polyfills and fast-path branching.

### 2) Main CLI assembly

- `src/main.tsx` wires Commander commands/options, settings/config loading, auth/bootstrap, MCP/plugin initialization, and launches REPL/headless flows.
- It is the orchestration layer for app startup, not the per-turn model loop.

### 3) Conversation execution core

- `src/QueryEngine.ts` is the turn/session orchestrator used by the app surface.
  - Maintains mutable conversation state, usage accounting, permission denials, file-state snapshots, and submit loop lifecycle.
- `src/query.ts` implements the low-level streaming query loop.
  - Handles model streaming events, tool-use/result continuation, compacting paths, and turn budget logic.

Rule of thumb:
- "Why did this turn/session behave this way?" -> start in `QueryEngine.ts`
- "Why did this specific stream/tool continuation happen?" -> inspect `query.ts`

### 4) API/provider layer

- `src/services/api/claude.ts` builds API request payloads and handles streaming responses.
- Provider routing is abstracted so Anthropic direct, Bedrock, Vertex, and Azure can be used through one flow.

### 5) Tool system

- Tool contract: `src/Tool.ts`
- Built-in tool registry and gating: `src/tools.ts`
  - Final tool pool is assembled by environment/mode/feature checks and permission filtering.
- Concrete tools live in `src/tools/<ToolName>/`.

When adding/changing tools, check all three layers: tool implementation, registry inclusion (`tools.ts`), and permission/mode visibility.

### 6) Context and prompt composition

- `src/context.ts` builds cached system/user context injected into requests.
  - Includes git snapshot, date, CLAUDE.md content, and memory files.
- `src/utils/claudemd.ts` discovers and loads CLAUDE.md sources.

### 7) SDK type surface

- `src/entrypoints/sdk/` exports the public type contracts (control schemas, core types, tool types, settings types).
- These are the types external consumers (Agent SDK, IDE extensions) depend on — changes here have broader impact.

### 8) UI and state

- REPL UI: `src/screens/REPL.tsx` + components under `src/components/`.
- Shared app state: `src/state/*`
- Session-global bootstrap state: `src/bootstrap/state.ts`

## Feature Flags and Stubs (Critical)

- `feature()` is imported from `bun:bundle` across the codebase.
- In this external/decompiled build, `src/entrypoints/cli.tsx` provides a runtime polyfill where `feature()` always returns `false`.
- Therefore, many Anthropic-internal branches are intentionally unreachable here.

Do not spend time implementing code that is only reachable behind feature flags unless you also change this gating model.

## Monorepo / Workspace layout

- Bun workspace monorepo (`package.json` workspaces)
- Internal/stub packages are under `packages/` and `packages/@ant/`
- Most `*-napi` and `@ant/*` packages are placeholders; `color-diff-napi` is the notable fully implemented package

## Practical Guidance for Future Claude Instances

- Prioritize runtime behavior (`bun run dev`) over strict typing cleanup.
- Before large refactors, verify whether target paths are feature-gated dead code.
- For startup issues, trace: `entrypoints/cli.tsx` -> `main.tsx`.
- For generation/tool loop issues, trace: `QueryEngine.ts` -> `query.ts` -> `services/api/claude.ts`.
- The `tsconfig.json` uses `"strict": false` and path alias `src/*` -> `./src/*` — keep these in mind when adding imports.

## Config directory rename (project-specific)

This fork uses `.myclaude` instead of `.claude` everywhere a config path appears, and the env var that overrides the user-config home is `MYCLAUDE_CONFIG_DIR` (not `CLAUDE_CONFIG_DIR`). Applies to:
- User config home: `~/.myclaude/` and the global state file `~/.myclaude.json`
- Project-level dirs: `<repo>/.myclaude/{settings.json,agents,skills,rules,scheduled_tasks.json,worktrees,...}`
- Children inherit the env var name via `src/utils/swarm/spawnUtils.ts`

Not renamed (kept identical to upstream):
- CCR container paths (`/home/claude/.claude/remote/...`) and homespace pod paths (`/root/.claude/...`) — fixed by Anthropic infra
- Theme color name `"claude"`, `process.title`, `program.name('claude')`, analytics identifiers, `.claude-plugin` directory convention, and all `*.claude.com` / `*.claude.ai` URLs
