## 2024-05-24 - Nuxt Nitro Static JSON Import Optimization
**Learning:** In Nuxt/Nitro, using dynamic `fs.readFile(path.resolve(process.cwd(), ...))` to load static JSON data for API routes is inefficient, not automatically bundled, and can lead to production bugs since `process.cwd()` may not point to the expected directory.
**Action:** Use direct ES module imports (e.g., `import data from '../data.json'`) for static JSON files instead. Nitro will automatically bundle and cache the data in memory, improving performance and deployment reliability.
