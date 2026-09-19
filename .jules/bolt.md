## 2024-05-18 - Nitro JSON ES Module Imports
**Learning:** In Nuxt/Nitro architectures, dynamically reading static JSON files with `fs.readFile` and `process.cwd()` creates slow I/O bottlenecks per request and is fragile in production.
**Action:** Directly import static JSON files as ES modules (`import data from '../data.json'`) to bundle and cache them in memory automatically.
