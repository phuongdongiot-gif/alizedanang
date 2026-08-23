## 2024-05-24 - Nuxt Nitro Static JSON Loading Performance
**Learning:** In Nuxt/Nitro architectures, using `fs.readFile` with `process.cwd()` to load static JSON files on every request is an anti-pattern. It creates unnecessary I/O overhead and is fragile in production deployments because `process.cwd()` might not point to the original source.
**Action:** Replace dynamic `fs.readFile` with direct ES module imports for static JSON data (`import data from '../data.json'`). Nitro natively bundles these imports, caching the data in memory and avoiding file system reads entirely.
