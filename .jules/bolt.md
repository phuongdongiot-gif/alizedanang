## 2024-05-24 - Direct JSON Imports in Nuxt/Nitro
**Learning:** In Nuxt/Nitro applications, reading static JSON data using `fs.readFile` with `process.cwd()` is inefficient and fragile in production. Nitro natively supports ES module imports of JSON files, which automatically bundles and caches the data in memory without requiring import assertions.
**Action:** Use ES module imports (e.g., `import data from '../data.json'`) instead of `fs.readFile` for static JSON data in Nuxt/Nitro projects to improve performance and reliability.
