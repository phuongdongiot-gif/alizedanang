## 2024-05-24 - Optimize static JSON reading in Nuxt/Nitro
**Learning:** Nuxt's Nitro server natively supports ES module imports of JSON files, which automatically caches the data in memory and is more bundler-friendly than dynamic `fs.readFile` with `process.cwd()`.
**Action:** Replace `fs.readFile` and `JSON.parse` with direct ES module imports for static data to improve performance and prevent production bugs.
