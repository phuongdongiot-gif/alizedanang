## 2024-07-02 - Direct JSON Imports in Nuxt Nitro
**Learning:** Nuxt Nitro natively supports direct ES module imports of JSON files. This approach caches the data in memory and is more bundler-friendly than using dynamic `fs.readFile` with `process.cwd()`. The imported object is cached, so non-mutating methods like `Array.filter()` must be used to safely manipulate the data across requests.
**Action:** Always prefer direct ES module imports for static JSON data in Nuxt Nitro APIs to avoid expensive filesystem reads per request and ensure robust deployment.
