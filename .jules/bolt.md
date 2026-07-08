## 2024-07-08 - Nitro Server JSON Import Optimization
**Learning:** In Nuxt/Nitro applications, reading static JSON data dynamically using `fs.readFile` and `process.cwd()` is inefficient and fragile in production builds because `process.cwd()` may not point to the original source directories.
**Action:** Always use direct ES module imports for static JSON files (e.g., `import data from '../data.json'`) in Nuxt/Nitro to automatically bundle the data, avoid production path bugs, and cache the data in memory.
