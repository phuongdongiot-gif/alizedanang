## 2026-11-05 - Initializing Bolt Journal
**Learning:** Initializing journal for critical codebase learnings.
**Action:** Always document architecture-specific bottlenecks here.
## 2026-11-05 - Caching Static Data via Imports
**Learning:** In Nuxt/Nitro, using `fs.readFile` to load static JSON files on every API request is inefficient and causes unnecessary disk I/O and parsing overhead.
**Action:** Use ES module imports for static JSON data to cache them in memory automatically.
