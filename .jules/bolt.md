## 2025-01-20 - Optimize Nuxt Nitro static file fetching
**Learning:** Nuxt's Nitro server natively supports ES module imports of JSON files. Using `fs.readFile` with `process.cwd()` is not only slower due to disk I/O and JSON parsing per request, but also bundler-unfriendly and prone to path issues in production. Direct imports automatically bundle and cache the data in memory.
**Action:** Replace dynamic `fs.readFile` and `JSON.parse` operations for static JSON files with direct ES module imports (e.g., `import data from '../data.json'`) in Nitro API endpoints.
