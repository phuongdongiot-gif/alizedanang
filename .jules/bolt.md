## 2024-06-13 - Avoid fs.readFile bottlenecks with direct JSON imports
**Learning:** Nuxt's Nitro server natively supports ES module imports of JSON files. Importing JSON directly caches the data in memory, avoiding inefficient fs.readFile operations and common production bugs where process.cwd() does not point to the original source directories.
**Action:** Always prefer direct static JSON imports (e.g., `import data from '../data.json'`) over dynamic `fs.readFile` with `process.cwd()` to improve performance and prevent bundler path issues.
