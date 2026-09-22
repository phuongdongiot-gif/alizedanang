## 2024-05-24 - Nuxt Nitro Static JSON Imports
**Learning:** In Nuxt/Nitro, dynamically reading static JSON data via `fs.readFile` and `process.cwd()` is not only inefficient (blocking I/O) but also error-prone in production deployments due to bundler path differences.
**Action:** Always use direct ES module imports for static JSON data (e.g., `import data from '../data/projects.json'`). Nitro natively bundles these imports and caches them in memory, significantly improving response times and avoiding process.cwd() issues.
