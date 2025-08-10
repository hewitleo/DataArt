# Timeline App

A basic HTML and CSS project for displaying a timeline of events.

## Stage-1: Structure and Layout

This is the first stage of the Timeline App. It includes the basic structure using semantic HTML elements and simple styling.

### Features Implemented

- **Header (`<header>`)**  
  Includes a logo image, the app title "Time Line App", and a theme toggle button (functionality not yet implemented).

- **Navigation (`<nav>`)**  
  Contains:
  - A hamburger icon (≡) representing the menu.
  - A search bar aligned next to it (alignment improvements may be added later).

- **Main Content (`<main>`)**
  - Contains a `<section id="timeline">` which holds event entries.
  - Each event is represented using `<article>`, including:
    - Event title (`<h2>`)
    - Description (`<p>`)
    - Image and caption using `<figure>` and `<figcaption>`

- **Modal Container (`<div id="modal">`)**  
  An empty div included for future popup or modal implementations.

### Styling
- Basic internal CSS is used:
  - `header` has a **darksalmon** background.
  - `nav` has a **lightcyan** background.
  - `#timeline` has a **dashed gray border** for visibility.

### Files
- `index.html`: The main HTML file.
- *(Images like `icon.png` and `event.jpg` should be in the same directory.)*

---

> This is the foundation of the project. Future stages will include dynamic features, interactivity (e.g., toggle theme), and data-driven event entries.
