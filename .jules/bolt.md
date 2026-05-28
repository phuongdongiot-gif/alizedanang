## 2026-05-28 - [Nuxt Nitro Static Data Optimization]
**Learning:** In Nuxt/Nitro deployments, reading static JSON files dynamically using `fs.readFile(path.resolve(process.cwd(), ...))` causes high overhead and risks deployment failures when the working directory differs in production. ES module imports of JSON files are automatically bundled and cached by Nitro without assertions.
**Action:** Use static imports (e.g., `import data from '../data.json'`) instead of `fs.readFile` for static data in Nitro APIs. Ensure no mutating array/object operations are used on the cached import data.
