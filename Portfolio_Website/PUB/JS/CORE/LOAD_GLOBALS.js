// Holds Logic for connecting to external Sites //
    
/*
    LOAD_GLOBALS.js
    -------------------------------------------
    Loads all 3rd-party libraries and internal 
    connection scripts needed across the website.
    Keeps HTML pages clean (only 1 script tag needed).
*/

// List of external libraries to load
const externalScripts = [
    "https://unpkg.com/pocketbase/dist/pocketbase.umd.js"
];

// List of internal scripts to load (in order)
const internalScripts = [
    "./JS/DB/DB_CONNECT.js"
];

// Helper: Load a script and return a Promise
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.onload = () => {
            console.log(`Loaded: ${src}`);
            resolve();
        };
        s.onerror = () => reject(new Error(`Failed to load: ${src}`));
        document.head.appendChild(s);
    });
}

// Main loader
async function loadGlobals() {
    console.log("🌐 Loading global scripts...");

    // Load externals first
    for (const script of externalScripts) {
        await loadScript(script);
    }

    // Then load internal scripts
    for (const script of internalScripts) {
        await loadScript(script);
    }

    console.log("✅ All global scripts loaded");
}

// Begin loading
loadGlobals();
