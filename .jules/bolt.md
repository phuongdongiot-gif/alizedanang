## 2024-10-08 - Nuxt/Nitro Static JSON Import Performance
**Learning:** In Nuxt/Nitro deployments, using dynamic fs.readFile with process.cwd() to read static JSON files is both a performance bottleneck (reading from disk on every request) and brittle (as process.cwd() might not point to the original source directories in production).
**Action:** Always utilize direct ES module imports for static JSON data in Nuxt/Nitro environments. This caches the data in memory for faster responses, bypasses process.cwd() fragility, and ensures the data is bundled correctly.
