## 2024-10-24 - Bypass File System Overhead in Nuxt/Nitro
**Learning:** In Nuxt/Nitro, reading static JSON files with fs.readFile is not only a performance overhead, but can be brittle in production builds without explicit static file inclusion rules. Importing JSON files directly as ES modules avoids fs overhead, bundles data into the build, and caches the result.
**Action:** Always prefer ES module imports over fs.readFile for static JSON data in Nuxt/Nitro endpoints.
