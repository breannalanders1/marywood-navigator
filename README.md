# Marywood Campus Navigator

A interactive web application that is designed to help Marywood University students navigate through campus buildings, explore administrative and academic resources, and interact with a built-in map and guided assistant.

---

## Key Features

* **Interactive Campus Map:** Built using React-Leaflet and OpenStreetMap, featuring custom markers and building popups with official campus photos.
* **Comprehensive Resource Directory:** Features important academic, athletic, dining, and administrative offices categorized for quick discovery.
* **Guided Assistant:** A built-in chat interface that understands building nicknames (e.g. "LAC", "Naz", "Gym") and resource keywords (e.g., "transcripts", "FAFSA") with direct cross-tab navigation ("Show me more!").
* **Responsive Design:** Optimized for both desktop displays and mobile device viewing.

---

## Built With

* **Framework:** React (Vite)
* **Mapping Library:** React-Leaflet / Leaflet.js
* **Styling:** Custom CSS with modern CSS variables and flexbox/grid layouts
* **Deployment:** Vercel

---

##  Project Structure

```text
marywood-campus-navigator/
├── public/                  # Static assets & building imagery
├── src/
│   ├── assets/              # Campus photos & map icons
│   ├── components/          # React components (Map, Assistant)
│   ├── data/                # Structured datasets (buildings.js, categories.js, contactInfo.js, resources.js)
│   ├── styles/              # Modular stylesheets (assistant.css, contact.css, home.css, resources.css, etc.)
│      ── App.css
       ── App.jsx             # Main routing and global state controller
       ── index.css              
│      ── main.jsx             
└── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
