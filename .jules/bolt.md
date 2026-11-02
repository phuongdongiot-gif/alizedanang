## 2024-11-02 - Nitro Static JSON Performance
**Learning:** In Nuxt/Nitro, using `fs.readFile` with JSON parsing in API endpoints adds significant runtime overhead and file I/O latency for static data.
**Action:** Import static JSON files directly as ES modules (`import data from './data.json'`) to bundle the data in memory and completely bypass runtime parsing.
