## 2024-05-14 - Optimize static data loading in Nuxt Nitro
**Learning:** Nuxt Nitro supports direct ES module imports for JSON files, which is significantly faster and more bundler-friendly than using dynamic fs.readFile operations. It caches the data in memory for subsequent requests.
**Action:** Always use direct JSON imports for static data in Nuxt Nitro applications to leverage memory caching and avoid production bugs related to process.cwd().
