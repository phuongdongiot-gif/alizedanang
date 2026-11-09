## 2024-05-24 - File System Reads in Server Handlers
**Learning:** Nuxt server handlers are dynamically fetching local static json via `fs.readFile`. This adds I/O overhead on every request and causes issues during builds/deployments because the static assets might not be available at runtime.
**Action:** Replace `fs.readFile` with standard static ES Module imports using `import data from './path.json'` which bundles data and resolves memory/loading at startup rather than per-request.
