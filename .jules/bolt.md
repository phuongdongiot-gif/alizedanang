## 2024-07-20 - Nuxt Nitro Static JSON Imports
**Learning:** Nuxt's Nitro server natively supports ES module imports of static JSON files, bypassing the need for `fs.readFile` and `JSON.parse`. This approach automatically caches data in memory and ensures bundler compatibility for production deployments.
**Action:** Use direct ES module imports (`import data from './data.json'`) instead of `fs` operations for static data in Nuxt/Nitro applications. Ensure not to mutate the imported object directly since it is cached across requests.
