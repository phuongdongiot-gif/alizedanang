## 2024-05-24 - Static JSON Imports in Nuxt/Nitro
**Learning:** Nuxt's Nitro server natively supports ES module imports for JSON files, which is more performant than using `fs.readFile` on every request because it caches the data in memory. It is also more bundler-friendly and avoids production bugs with `process.cwd()`.
**Action:** Always use static ES module imports for static JSON files in Nuxt APIs instead of `fs.readFile` with `process.cwd()`. Remember that the imported object is cached and immutable, so use a distinct name and avoid direct mutations.
