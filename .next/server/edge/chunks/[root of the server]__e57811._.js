(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__e57811._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/src/routes.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * all about auth routes
 * for only unauthorized users
 * @type {string[]}
 */ __turbopack_esm__({
    "apiAuthRoutePrefix": (()=>apiAuthRoutePrefix),
    "authRoutes": (()=>authRoutes),
    "providerApiPrefix": (()=>providerApiPrefix),
    "publicRoutes": (()=>publicRoutes)
});
const authRoutes = [
    "/register",
    "/login",
    "/forget-password"
];
const publicRoutes = [
    "/",
    "/slots",
    "/card-x",
    "/pocker",
    "/roulette",
    "/favorites",
    "/table",
    "/fish",
    "/lottery",
    "/play",
    "/api/open-game",
    "/api/game/32328e87f8592ed205bbaa065dbacce4",
    "/api/gamexa-proxy",
    "/api/gamexa/players",
    "/api/gamexa/games",
    "/api/gamexa/games/launch",
    "/live-casino",
    "/promotion",
    "/hot",
    "/api/durantopay/deposit",
    "/api/durantopay/withdraw",
    "/api/durantopay/callback",
    "/api/durantopay/query",
    "/api/durantopay/test",
    "/api/deposit/payment/methods",
    "/api/deposit",
    "/api/withdraw",
    "/games",
    "/sports",
    "/manual",
    "/vip",
    "/mission",
    "/languages",
    "/appp",
    "/chat",
    "/pvp"
];
const apiAuthRoutePrefix = "/api";
const providerApiPrefix = "/api/provider";
}}),
"[project]/src/lib/db.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "db": (()=>db)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prisma/client/default.js [middleware] (ecmascript)");
;
const globalForPrisma = globalThis;
const db = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PrismaClient"]({
    log: [
        "query"
    ]
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = db;
}}),
"[project]/src/auth.config.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next-auth/providers/credentials.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/db.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/bcryptjs/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@auth/core/providers/credentials.js [middleware] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = {
    trustHost: true,
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])({
            name: "credentials",
            credentials: {
                phone: {
                    name: "phone",
                    type: "text"
                },
                password: {
                    name: "password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                const userPhone = credentials.phone || "";
                const password = credentials.password || "";
                if (!userPhone || !password) throw new Error("Invalid Credentials");
                const account = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["db"].user.findUnique({
                    where: {
                        phone: userPhone
                    }
                });
                if (!account) throw new Error("Account not found");
                const passwordIsMatch = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].compare(password, account.password);
                if (!passwordIsMatch) throw new Error("Invalid Password");
                // ✅ Cast to User type so TS এখন বুঝবে gameXAPlayerId আছে
                return account;
            }
        })
    ]
};
}}),
"[project]/src/middleware.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/routes.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$config$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/auth.config.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [middleware] (ecmascript) <locals>");
;
;
;
const { auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$config$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["default"]
});
const __TURBOPACK__default__export__ = auth(async (req)=>{
    const { nextUrl } = req;
    const session = !!req.auth;
    const isAuthRoute = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["authRoutes"].includes(nextUrl.pathname);
    const isPublicRoute = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["publicRoutes"].includes(nextUrl.pathname);
    const isProvider = nextUrl.pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$routes$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["providerApiPrefix"]);
    if (session && isAuthRoute && !isProvider) {
        return Response.redirect(new URL("/", nextUrl));
    }
    if (!session && !isPublicRoute && !isProvider && !isAuthRoute) {
        const callbackUrl = nextUrl.pathname;
        const encodeCallbackUrl = encodeURIComponent(callbackUrl);
        return Response.redirect(new URL(`/login?redirect=${encodeCallbackUrl}`, nextUrl));
    }
});
const config = {
    matcher: [
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        "/(api|trpc)(.*)"
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__e57811._.js.map