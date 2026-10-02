## 2023-10-25 - Caching JSON in Nuxt/Nitro
**Learning:** Using `fs.readFile` with `process.cwd()` in Nuxt/Nitro APIs re-reads files on every request. Importing JSON directly via ES modules bundles it and caches the object in memory, bypassing expensive disk I/O. Note: ES module imports are read-only constants, so they must be assigned to new mutable variables if filtering/reassignment is needed downstream.
**Action:** Default to static JSON imports instead of `fs.readFile` for static datasets in Nuxt APIs to maximize throughput.
