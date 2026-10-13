## 2024-10-13 - [ES Module JSON Import Optimization]
**Learning:** In Nuxt/Nitro production builds, raw static JSON files are not automatically included unless explicitly configured, and using `fs.readFile` with `JSON.parse` is an expensive, repeated operation on every request.
**Action:** Replace `fs.readFile` and `JSON.parse` with ES module imports (e.g., `import data from './data.json'`) to bundle the static data into the build and cache it in memory for faster access.
