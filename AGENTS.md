<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

# Project Instructions

## Stack
- Next.js App Router
- TypesScript
- Tailwind

## Code Style
- Prefer functional components
- Keep components under 300 lines
- Avoid unnecessary abstractions
- Reuse existing components before creating new ones

## Next.js
- Use Server Components by default
- Add "use client" only when required
- Keep API/server logic out of client components

## Agent Rules
- Read existing code before editing
- Make the smallest necessary change
- Do not modify unrelated files
- Do not install packages without approval
- Do not run builds unless requested
- If requirements are unclear, stop and ask

<!-- END:nextjs-agent-rules -->
