## 2024-05-18 - [Optimized Nuxt Nitro Server JSON Data Fetching]
**Learning:** In Nuxt/Nitro deployments, utilizing direct static JSON imports is more bundler-friendly than using dynamic `fs.readFile` with `process.cwd()`. It prevents common production bugs where `process.cwd()` does not point to the original source directories, and additionally it caches the data in memory.
**Action:** When working with static JSON files in Nuxt endpoints, always use direct ES module imports instead of reading files via `fs.readFile` to improve performance and production reliability.
