## 2025-02-23 - Nuxt Nitro JSON Data Loading Optimization
**Learning:** Nuxt's Nitro server natively supports ES module imports of JSON files without assertions. This is significantly faster and more bundler-friendly than using `fs.readFile` with `process.cwd()`, because the JSON data is automatically bundled and cached in memory across requests.
**Action:** Replace `fs.readFile` and `JSON.parse` operations for static data with direct ES module imports (`import data from '../data.json'`) in Nuxt API endpoints. Use `let items = data` if the data needs to be reassigned.
