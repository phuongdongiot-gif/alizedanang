
## $(date +%Y-%m-%d) - Optimize Static Data Loading in Nuxt Nitro
**Learning:** Nuxt Nitro server naturally supports direct ES module imports of JSON files (e.g., `import data from '../data.json'`), which bundles and caches the static data in memory. This is vastly superior in performance and reliability to `fs.readFile` with `process.cwd()`, avoiding inefficient file I/O per request and bypassing common `process.cwd()` path resolution bugs in serverless production environments.
**Action:** When creating server API routes that serve read-only static JSON data, always prefer direct ES module imports over dynamic file system reads to leverage bundler optimization and in-memory caching.
