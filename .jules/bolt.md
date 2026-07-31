## 2024-05-18 - Nuxt/Nitro Static JSON Import Optimization
**Learning:** In Nuxt/Nitro, reading static JSON files dynamically with `fs.readFile` and `process.cwd()` is not only inefficient but also fragile in production builds because raw static files might not be included and `process.cwd()` might not point to the original source.
**Action:** Use ES module imports (e.g., `import data from '../data/file.json'`) for static JSON data. This automatically bundles and caches the data in memory, bypassing file system calls.
