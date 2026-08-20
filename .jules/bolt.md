## 2024-08-20 - Nuxt/Nitro Static JSON Data Imports
**Learning:** In Nuxt/Nitro, using `fs.readFile` with `process.cwd()` to read static JSON files is not only inefficient (reading on every request) but can lead to production bugs where `process.cwd()` doesn't point to the original source directories. Native ES module imports of JSON files (`import data from '../data.json'`) automatically bundle and cache the data in memory.
**Action:** Always use ES module imports for static JSON data in Nuxt/Nitro apps to optimize memory/speed and ensure proper bundling, instead of `fs.readFile`.
