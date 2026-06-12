## 2024-06-12 - Nuxt Nitro JSON Data Imports Cache

**Learning:** Nuxt Nitro natively supports direct ES module imports of JSON files (e.g., `import data from '../data.json'`), which is more bundler-friendly, avoids process.cwd() pathing bugs in production, and automatically caches the parsed JSON data in memory across requests.

**Action:** Whenever fetching local static JSON files in Nuxt Nitro endpoints, replace inefficient, per-request `fs.readFile` / `JSON.parse` operations with direct ES module imports. When mutating the data, ensure you use non-mutating methods like `.filter()` to preserve the shared in-memory reference.
