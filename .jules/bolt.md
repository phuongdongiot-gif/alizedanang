## 2024-05-24 - Optimizing JSON Reads in Nuxt Nitro
**Learning:** In Nuxt/Nitro, reading static JSON files dynamically using `fs.readFile` with `process.cwd()` per request is inefficient and fragile in production. Direct ES module imports of JSON files automatically bundle and cache the data in memory.
**Action:** Use direct ES module imports (e.g., `import data from '../data.json'`) for static JSON data instead of `fs.readFile` at runtime. Remember that imported objects are cached, so use non-mutating methods when modifying them per-request.
