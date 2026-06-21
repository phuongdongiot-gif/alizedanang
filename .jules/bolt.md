## 2025-02-18 - Nuxt/Nitro Performance: Direct JSON Imports

**Learning:** In Nuxt/Nitro applications, using dynamic `fs.readFile(path.resolve(process.cwd(), ...))` inside API routes causes slow synchronous disk I/O per request and creates a major risk of production bugs, because `process.cwd()` often does not point to the expected source directory after bundling.

**Action:** Whenever possible, use static ES module JSON imports (e.g., `import data from '../data.json'`). Nitro natively parses and caches this during the build process, resulting in faster response times and more robust path resolution in production environments. Ensure non-mutating operations are used on the cached module to prevent shared state bugs across requests.
