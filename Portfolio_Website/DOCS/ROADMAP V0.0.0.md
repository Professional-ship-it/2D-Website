# Roadmap + Directory Structure Blueprint
ROOT/
│
├─ PUB/                           # Public-facing, what the browser sees
│   │
│   ├─ ASSETS/                    # All media lives here
│   │   ├─ IMG_R/                 # Raster images (JPG/PNG/WebP)
│   │   ├─ IMG_V/                 # Vector (SVG/PDF)
│   │   ├─ VID/                   # Video content
│   │   ├─ ICON/                  # Mini logo database
│   │   └─ FONT/                  # Local fonts
│   │
│   ├─ DATA/                      # JSON databases (content-driven website)
│   │   ├─ BLOG_DB.json           # Stores all project entries
│   │   ├─ TAG_DB.json            # All available tags
│   │   └─ PTF_DB.json            # Portfolio definitions (auto-linked to tags)
│   │
│   ├─ CSS/                       # Styling / Look & Feel
│   │   ├─ CORE/                  # Global styles
│   │   │   ├─ RESET.css
│   │   │   ├─ VAR.css            # Variables (colors, radii, spacing)
│   │   │   └─ THEME.css          # Light/Dark theme toggles
│   │   ├─ UI/                    # UI Components (one file each)
│   │   │   ├─ BTN.css
│   │   │   ├─ FRAME.css
│   │   │   ├─ SIDEBAR.css
│   │   │   ├─ HEADER.css
│   │   │   └─ GRID.css
│   │   └─ PAGES/                 # Page-specific styling
│   │       ├─ HOME.css
│   │       ├─ ABOUT.css
│   │       ├─ BLOG.css
│   │       ├─ PORT.css
│   │       └─ CONTACT.css
│   │
│   ├─ JS/                        # Behavior / Logic
│   │   ├─ CORE/                  # App-level logic
│   │   │   ├─ INIT.js            # Loads on first page entry
│   │   │   ├─ ROUTER.js          # No-refresh page swapping
│   │   │   └─ STATE.js           # Global app state (theme, user, etc.)
│   │   ├─ UI/                    # Component logic
│   │   │   ├─ BTN.js
│   │   │   ├─ TAG.js
│   │   │   ├─ FRAME.js
│   │   │   ├─ SIDEBAR.js
│   │   │   └─ HEADER.js
│   │   ├─ DB/                    # Database interactions
│   │   │   ├─ JSON_RW.js         # Read/Write JSON data (MVP database)
│   │   │   └─ DB_CONNECT.js      # Future: Supabase / PocketBase connector
│   │   └─ PAGES/                 # Page controller scripts
│   │       ├─ HOME.js
│   │       ├─ BLOG.js
│   │       ├─ PORT.js
│   │       └─ CONTACT.js
│   │
│   ├─ SBX/                       # ✦ SANDBOX / PLAYGROUND ✦
│   │   ├─ COMP/                  # Component experiments (Buttons, Tags, Frames…)
│   │   ├─ TEST/                  # Logic testing (JSON writing, state handling)
│   │   └─ LAYOUT/                # Layout prototyping (Bento, Diamond grid)
│   │
│   ├─ INDEX.html                 # Landing page
│   ├─ ABOUT.html
│   ├─ BLOG.html
│   ├─ PORT.html
│   ├─ CONTACT.html
│   └─ ADMIN.html                 # Portfolio Manager (Add/Edit content)
│
├─ SRC/                           # Private / Working resources
│   ├─ EXPORT/                    # Original art files (PSD, PNG, etc.)
│   └─ CACHE/                     # Conversion holding zone
│
├─ SCRIPTS/                       # Automation & build helpers
│   ├─ BUILD.js
│   └─ IMG_OPT.js                 # Squoosh/Compression pipeline
│
├─ DOCS/                          # Project documentation
│   ├─ INTENTIONS.pdf             # Already generated
│   └─ ROADMAP.md                 # ← Directory Blueprint goes here
│
└─ SHOP/                          # Placeholder for future store
    ├─ SHOP.html
    ├─ JS/
    ├─ CSS/
    └─ SVC/                       # Payment/Order services go here (later)

