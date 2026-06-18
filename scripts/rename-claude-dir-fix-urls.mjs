#!/usr/bin/env bun
// Fix: revert URL hostnames `*.myclaude.com` / `*.myclaude.ai` back to claude.com / claude.ai.
// `.myclaude.json` (the home-level config file) MUST stay renamed.

import { readFileSync, writeFileSync } from 'fs'
import { readdirSync } from 'fs'
import { join, extname } from 'path'

const ROOT = new URL('../src/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const exts = new Set(['.ts', '.tsx', '.mts', '.cts', '.js', '.jsx', '.mjs'])

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) walk(p, out)
    else if (exts.has(extname(entry.name))) out.push(p)
  }
  return out
}

let changedFiles = 0
for (const file of walk(ROOT)) {
  const orig = readFileSync(file, 'utf8')
  // Revert hostname segments only. \w means [A-Za-z0-9_] — matches a leading
  // hostname label, ensuring we don't touch a path segment like `~/.myclaude.com`
  // (no such case anyway, since `.myclaude.json` is the only filename usage).
  let out = orig.replace(/(\w)\.myclaude\.com\b/g, '$1.claude.com')
  out = out.replace(/(\w)\.myclaude\.ai\b/g, '$1.claude.ai')
  if (out !== orig) {
    writeFileSync(file, out)
    changedFiles++
  }
}
console.log(`Reverted URLs in ${changedFiles} files.`)
