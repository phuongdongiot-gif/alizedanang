## 2024-07-07 - Inefficient fs.readFile for static JSON data
**Learning:** The backend APIs were importing static data using dynamic `fs.readFile` with `process.cwd()`. In Nuxt/Nitro, this causes I/O overhead on every request and is fragile in production builds as raw static files might not be included.
**Action:** Use native ES module imports for JSON files (e.g., `import data from '../data.json'`) to bundle and cache data in memory, bypassing I/O bottlenecks and ensuring bundler compatibility. Always remember to use non-mutating methods like `filter` on the cached object.
