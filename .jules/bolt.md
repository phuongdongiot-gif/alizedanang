## 2024-10-29 - Memory Caching Static JSON
**Learning:** In Nuxt/Nitro, using fs.readFile for static JSON data on every request is inefficient and fragile in production builds. ES module imports bypass this bottleneck by caching the data in memory and bundling it directly.
**Action:** Always prefer ES module imports for read-only static JSON data instead of fs.readFile inside request handlers.
