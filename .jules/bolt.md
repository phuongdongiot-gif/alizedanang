## 2024-05-24 - Replace dynamic fs.readFile with static JSON imports in Nuxt Nitro
**Learning:** Nuxt's Nitro server natively supports ES module imports of JSON files, which automatically bundles and caches the data in memory. Using `fs.readFile` with `process.cwd()` is not only slower due to I/O overhead on every request but also fragile in production builds where `process.cwd()` may not point to the original source directories.
**Action:** Always use direct ES module imports for static JSON data in Nuxt/Nitro API routes to leverage in-memory caching and ensure reliable production builds.
