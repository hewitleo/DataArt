# **Timeline App**

A simple project that started with basic HTML & CSS and then grew into a more modern TypeScript-based app for displaying events in a timeline.

---

## **Stage 1: Building the Basics**

The first version focused on creating the structure and layout.

**What it included:**

* Header with the app title, logo, and a theme button
* Navigation bar with a hamburger menu (≡) and a search bar
* Timeline section where events are displayed using `<article>` tags (each with a title, description, and image)
* A hidden modal that will be used later for pop-ups

**Files in this stage:**

* `index.html` → main structure of the app
* `images/` → logo and event images

---

## **Stage 2: Making It Dynamic with TypeScript**

The project was then converted into a modular TypeScript codebase with a proper build process.

**What changed:**

* Code was split into separate modules:

  * `fetcher.ts` loads event data from a JSON file
  * `renderer.ts` renders events into the timeline
  * `modal.ts` manages the pop-up modal
* An `eventData` interface was introduced for type safety
* TypeScript compiles everything into a single `index.js` inside the `dist/` folder

**What I learned:**

* Keeping file names and paths consistent is important (for example, `renderer.ts` vs `renderer.js`)
* Async/await makes data fetching cleaner and easier to understand
* Setting up `tsconfig.json` properly prevents those frustrating 404 errors in the browser

**Files in this stage:**

* `src/` → all TypeScript source code
* `dist/` → compiled JavaScript (`index.js`)
* `data/events.json` → timeline event data
* `tsconfig.json` → TypeScript configuration
* `index.html` → updated to point to `dist/index.js`

---
