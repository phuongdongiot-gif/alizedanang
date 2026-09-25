## 2024-05-30 - [In-memory caching via ES Module JSON Imports]
**Learning:** In Nuxt/Nitro, using `fs.readFile` and `JSON.parse` with `process.cwd()` for static JSON data on every request causes unnecessary disk I/O and parsing overhead, and can lead to bugs in production if the raw static files aren't explicitly bundled.
**Action:** Directly import JSON files as ES modules (`import data from '../data.json'`) to let the bundler cache the data in-memory and automatically include it in the build. When filtering, re-assign to a mutable variable to avoid mutating the read-only imported constant.
