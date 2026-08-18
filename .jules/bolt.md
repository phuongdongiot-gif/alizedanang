## 2024-10-24 - Optimize Nuxt/Nitro Data Fetching
**Learning:** Nuxt's Nitro server natively supports ES module imports of JSON files. Utilizing direct static JSON imports is more bundler-friendly than using dynamic `fs.readFile` with `process.cwd()`, as it bundles data directly, prevents production bugs where `process.cwd()` fails, and avoids inefficient file system reads per request by caching the JSON in memory.
**Action:** Use ES module imports for static JSON data in Nitro APIs rather than `fs.readFile`.
