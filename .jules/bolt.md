## 2026-05-30 - Nuxt/Nitro Bundler-Friendly JSON Imports
**Learning:** In Nuxt/Nitro deployments, using dynamic `fs.readFile` with `process.cwd()` to read JSON files can lead to production 404s because the build output directory structure changes. Direct ES module JSON imports are both faster (cached in memory) and more bundler-friendly as they guarantee the data is included in the build.
**Action:** Always prefer direct JSON imports over `fs.readFile` for static data in Nuxt/Nitro backends, while ensuring non-mutating methods are used to filter/query the cached object.
