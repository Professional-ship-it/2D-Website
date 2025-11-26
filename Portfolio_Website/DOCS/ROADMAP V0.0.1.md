2D-WEBSITE/
└── Portfolio_Website/                     ← Main project root

    ├── DOCS/
    │   └── ROADMAP.md                    ← Development plan, milestones, feature roadmap

    ├── PUB/                              ← Public site root (HTML/CSS/JS served to browser)
    │
    │   ├── CSS/                          ← All styling (modular, scalable)
    │   │
    │   │   ├── CORE/                     ← Global foundational styling
    │   │   │   ├── RESET.css             ← CSS reset for consistent cross-browser rendering
    │   │   │   ├── THEME.css             ← Theme variables (light/dark, NASA-punk palette)
    │   │   │   ├── VAR.css               ← Design tokens: sizes, spacing, fonts, colors
    │   │   │   └── PAGES/                ← Page-specific styling
    │   │   │       ├── ABOUT.css         ← About/work-ethic page styles
    │   │   │       ├── BLOG.css          ← Blog/timeline page layout & effects
    │   │   │       ├── CONTACT.css       ← Contact page layout, forms, micro-interactions
    │   │   │       ├── HOME.css          ← Landing page hero, macro animations
    │   │   │       └── PORT.css          ← Portfolio page frame/grid system
    │   │
    │   │   └── UI/                       ← Component-level styling (buttons/frames/grid/etc.)
    │   │       ├── BTN.css               ← Universal button component (glass effects, shadows)
    │   │       ├── FRAME.css             ← Frame component (bento boxes, detail panes)
    │   │       ├── GRID.css              ← Flexible bento-grid layouts
    │   │       ├── HEADER.css            ← Header + hamburger menu + theme toggle styling
    │   │       └── SIDEBAR.css           ← Right-side sliding sidebar (navigation/admin)
    │
    │   ├── DATA/                         ← Local JSON “mini-databases”
    │   │   ├── BLOG_DB.json              ← Blog/timeline entries + metadata
    │   │   ├── PTF_DB.json               ← Portfolio collections
    │   │   └── TAG_DB.json               ← Tags used to connect blog ↔ portfolio
    │
    │   ├── JS/                           ← JavaScript for core systems, routing, UI logic
    │   │
    │   │   ├── CORE/                     ← Global/core functionality
    │   │   │   ├── INIT.js               ← Initialization pipeline for the site
    │   │   │   ├── LOAD_GLOBALS.js       ← Global variables/constants loader
    │   │   │   ├── ROUTER.js             ← Page router for SPA-like transitions
    │   │   │   └── STATE.js              ← Global state manager (tags, dark mode, etc.)
    │   │
    │   │   ├── DB/                       ← Database utility layer (PocketBase + JSON fallback)
    │   │   │   ├── DB_CONNECT.js         ← Connects to PocketBase (or local “offline-first” mode)
    │   │   │   └── JSON_RW.js            ← Safe read/write wrapper for JSON data
    │   │
    │   │   ├── PAGES/                    ← Page logic controllers
    │   │   │   ├── BLOG.js               ← Blog/timeline rendering, pathing, tag mapping
    │   │   │   ├── CONTACT.js            ← Contact form events + micro animations
    │   │   │   ├── HOME.js               ← Landing animations, hero interactions
    │   │   │   └── PORT.js               ← Portfolio rendering, frame expansion logic
    │   │
    │   │   └── UI/                       ← Interactive component logic
    │   │       ├── BTN.js                ← Button ripple effects, hover logic
    │   │       ├── FRAME.js              ← Expanding frames & detail-panel behavior
    │   │       ├── HEADER.js             ← Header behavior, mobile nav, theme toggle
    │   │       ├── SIDEBAR.js            ← Slide-in menus, settings panel
    │   │       └── TAG.js                ← Tag-component logic (selection/filtering)
    │
    │   ├── ABOUT.html                    ← About/work-ethic page
    │   ├── ADMIN.html                    ← Admin/portfolio-manager interface (PB powered)
    │   ├── BLOG.html                     ← Blog/timeline page
    │   ├── CONTACT.html                  ← Contact page
    │   ├── INDEX.html                    ← Landing page / Home
    │   └── PORT.html                     ← Portfolio showcase page
    │
    ├── SCRIPTS/
    │   ├── POCKETBASE/                   ← Lightweight backend (local-first CMS)
    │   │   ├── pb_data/                  ← Local PB database files
    │   │   │   ├── auxiliary.db          ← PB metadata DB
    │   │   │   └── data.db               ← PB main dataset
    │   │   ├── types.d.ts                ← Type definitions for PB collections
    │   │   ├── pb_migrations/            ← Schema definition scripts
    │   │   │   ├── 1763017369_created_Tags.js
    │   │   │   ├── 1763017483_created_Blog_Entries.js
    │   │   │   └── 1763017619_created_Portfolios.js
    │   │   ├── pocketbase.exe            ← PB server executable
    │   │   ├── BUILD.js                  ← Build script (bundling, prep for deployment)
    │   │   └── IMG_OPT.js                ← Image optimization script (squoosh-like logic)
    │
    │   └── SHOP/                         ← Future shop system
    │       └── SHOP.html                 ← Placeholder for future e-commerce features
    │
    ├── Dockerfile                        ← Containerization for deployment & dev environment
    ├── LICENSE                           ← Project license
    └── README.md                         ← Overview/instructions for contributors