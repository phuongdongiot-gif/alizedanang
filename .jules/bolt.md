## 2024-05-18 - Optimize Backend JSON Reads
**Learning:** In Nuxt/Nitro, repeatedly reading static JSON files with `fs.readFile` per request is an unnecessary performance bottleneck and can cause issues with production builds. Utilizing ES module imports caches the JSON directly in memory.
**Action:** When serving static data in server APIs, always prefer ES module imports over dynamic file system reads to improve response times and ensure reliability in production builds.
