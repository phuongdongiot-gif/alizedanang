## 2024-05-24 - [Nuxt Nitro Static JSON Import Optimization]
**Learning:** In Nuxt/Nitro, using `fs.readFile` with `process.cwd()` to read static JSON files is inefficient and fragile in production builds. Nuxt natively supports ES module imports of JSON files, which automatically bundles and caches the data in memory.
**Action:** Replace `fs.readFile` and `JSON.parse` with direct ES module imports for static JSON data to improve request performance and avoid production build issues.
