// Supabase / PocketBase connector

/*
    DB_CONNECT.js
    -------------------------------------------------
    Sets up PocketBase instance and tests the health.
*/

console.log("DB_CONNECT.js loaded");

const pb = new PocketBase("http://127.0.0.1:8090");

pb.health.check()
    .then(() => console.log("✅ PocketBase connected"))
    .catch(err => console.error("❌ PocketBase connection failed:", err));
