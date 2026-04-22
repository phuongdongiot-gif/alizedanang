## 2024-05-15 - Nuxt Backend API Performance Optimization
**Learning:** Nuxt server API endpoints that read static JSON files using `fs.readFile` and `JSON.parse` inside the event handler create an unnecessary I/O and CPU bottleneck on every request.
**Action:** Use ES module imports to load static JSON files (e.g., `import data from '../data/file.json'`). This allows the module bundler and Node.js to read and parse the file once at startup and cache the object in memory, avoiding redundant file system operations on each request.
