## 2024-11-04 - Cache Static JSON Data
**Learning:** In Nuxt/Nitro production builds, reading raw static JSON files using `fs.readFile` incurs unnecessary I/O overhead on every request.
**Action:** Import static JSON data as ES modules (`import data from './data.json'`) to cache them in memory and let the build process handle bundling.
