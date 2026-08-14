## 2024-05-24 - Optimizing Nuxt API JSON Loading
**Learning:** Nuxt's Nitro server natively supports ES module imports of JSON files. This automatically bundles and caches the data in memory, avoiding inefficient `fs.readFile` and `JSON.parse` operations on every request, and prevents production path resolution bugs with `process.cwd()`.
**Action:** Use static imports (e.g., `import data from '../data.json'`) instead of `fs.readFile` for static JSON data in Nuxt backend routes.
