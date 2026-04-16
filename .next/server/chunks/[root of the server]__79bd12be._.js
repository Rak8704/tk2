module.exports = {

"[project]/.next-internal/server/app/api/gamexa/games/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/gamexa/games/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
const GAMEXA_BASE_URL = process.env.GAMEXA_BASE_URL || "https://api.gamexaglobal.com";
const AGENT_CODE = process.env.GAMEXA_AGENT_CODE || "AG1756047904571CVP8";
const PASSWORD = process.env.GAMEXA_PASSWORD || "123456";
// Helper → Auth token
async function getAuthToken() {
    try {
        const res = await fetch(`${GAMEXA_BASE_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                agent_code: AGENT_CODE,
                password: PASSWORD
            })
        });
        if (!res.ok) {
            console.error("Failed login response:", await res.text());
            return null;
        }
        const data = await res.json();
        return data.token || null;
    } catch (err) {
        console.error("Token fetch error:", err);
        return null;
    }
}
async function GET(req) {
    try {
        const token = await getAuthToken();
        if (!token) {
            return Response.json({
                success: false,
                error: "Authentication failed"
            }, {
                status: 401
            });
        }
        const { searchParams } = new URL(req.url);
        const limit = searchParams.get("limit") || "100";
        const status = searchParams.get("status") || "active";
        const search = searchParams.get("search") || searchParams.get("q") || searchParams.get("query") || "";
        // Build query string with all parameters
        const queryParams = new URLSearchParams({
            limit,
            status
        });
        // Add search parameter if provided
        if (search) {
            queryParams.append("search", search);
        }
        console.log("Fetching games from GameXA with URL:", `${GAMEXA_BASE_URL}/api/games?${queryParams.toString()}`);
        console.log("GameXA API request headers:", {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        });
        const gameRes = await fetch(`${GAMEXA_BASE_URL}/api/games?${queryParams.toString()}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        const text = await gameRes.text();
        const contentType = gameRes.headers.get("content-type");
        console.log("GameXA API response status:", gameRes.status);
        console.log("GameXA API response headers:", Object.fromEntries(gameRes.headers.entries()));
        console.log("GameXA API response text:", text);
        // যদি JSON না আসে, console log এবং error return
        if (!contentType?.includes("application/json")) {
            console.error("Expected JSON but got:", text);
            return Response.json({
                success: false,
                error: "Unexpected response from GameXA",
                raw: text
            }, {
                status: 502
            });
        }
        const data = JSON.parse(text);
        return Response.json({
            success: true,
            games: data.games || [],
            pagination: data.pagination || {}
        }, {
            status: 200
        });
    } catch (err) {
        console.error("Games API Error:", err);
        return Response.json({
            success: false,
            error: err.message || "Unexpected error"
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__79bd12be._.js.map