## 2023-10-27 - Nuxt Nitro Static JSON Imports
**Learning:** Using `fs.readFile` with `process.cwd()` to load static JSON files in Nuxt Nitro is inefficient and prone to production bugs (where `process.cwd()` might not point to the original source directories). Nitro natively supports ES module imports of JSON files.
**Action:** Always use direct ES module imports for static JSON data (e.g., `import data from '../data.json'`) in Nuxt API routes. This automatically caches the data in memory and allows the bundler to handle the file correctly.
