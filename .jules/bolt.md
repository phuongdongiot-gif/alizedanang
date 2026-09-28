## 2024-05-30 - Nuxt/Nitro Static JSON Data Fetching Optimization
**Learning:** In Nuxt/Nitro deployments, using `fs.readFile` with `process.cwd()` for static JSON files is slow and fragile (fails in production builds if files aren't explicitly included). Nitro natively supports ES module imports of JSON files, which automatically bundles and caches the data in memory.
**Action:** Always use direct ES module imports (`import data from '../data.json'`) instead of `fs.readFile` for static JSON data in Nuxt/Nitro apps to improve response times and prevent production path bugs.
