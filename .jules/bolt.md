## 2024-10-30 - Replace fs.readFile with ES Module Imports
**Learning:** In Nuxt/Nitro production builds, reading JSON data using `fs.readFile` on every request introduces synchronous-like latency and fragility as static files are not automatically included in the build output. Direct ES module imports of JSON files bypass this issue by caching the data in memory and bundling it directly into the build.
**Action:** Always import static JSON data as ES modules in Nuxt/Nitro API routes instead of using `fs.readFile` to ensure in-memory caching and correct production bundling.
