module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/lib/features/apiSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "apiSlice": (()=>apiSlice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const baseQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
    baseUrl: "/"
});
const apiSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "api",
    baseQuery: baseQuery,
    tagTypes: [
        "deposit",
        "card",
        "withdraw",
        "invitationReward",
        "signinReward"
    ],
    endpoints: ()=>({})
});
}}),
"[project]/src/lib/store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "makeStore": (()=>makeStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$features$2f$apiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/features/apiSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
;
;
;
const makeStore = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
        reducer: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$features$2f$apiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiSlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$features$2f$apiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiSlice"].reducer
        },
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$features$2f$apiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiSlice"].middleware)
    });
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupListeners"])(makeStore().dispatch);
}}),
"[project]/src/app/StoreProvider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>StoreProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function StoreProvider({ children }) {
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeStore"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: storeRef.current,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/StoreProvider.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
}}),
"[project]/src/components/ui/sonner.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Toaster": (()=>Toaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const Toaster = ({ ...props })=>{
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sonner.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
;
}}),
"[project]/src/lib/features/gamesApiSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/features/api/gamesApiSlice.ts
__turbopack_esm__({
    "useFetchGamesByProviderMutation": (()=>useFetchGamesByProviderMutation),
    "useFetchGamesListMutation": (()=>useFetchGamesListMutation),
    "useOpenGameMutation": (()=>useOpenGameMutation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$features$2f$apiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/features/apiSlice.ts [app-ssr] (ecmascript)");
;
const gamesApiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$features$2f$apiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiSlice"].injectEndpoints({
    endpoints: (builder)=>({
            // ✅ CHANGED: from query to mutation & added parameter
            fetchGamesList: builder.mutation({
                query: ({ game_type, search })=>({
                        url: "api/games/list",
                        method: "POST",
                        body: {
                            game_type,
                            search
                        }
                    })
            }),
            openGame: builder.mutation({
                query: (body)=>({
                        url: `api/open-game`,
                        method: "POST",
                        body: body
                    })
            }),
            // New endpoint for fetching games by provider from GameXA
            fetchGamesByProvider: builder.mutation({
                query: ({ providerCode, page = 1, limit = 200 })=>({
                        url: `api/gamexa/games/providers/${providerCode}`,
                        method: "GET",
                        params: {
                            page,
                            limit
                        }
                    })
            })
        })
});
const { useFetchGamesListMutation, useOpenGameMutation, useFetchGamesByProviderMutation } = gamesApiSlice;
}}),
"[project]/src/types/game/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Categories": (()=>Categories),
    "Title": (()=>Title)
});
var Categories = /*#__PURE__*/ function(Categories) {
    Categories["FastGames"] = "fast_games";
    Categories["LiveDealers"] = "live_dealers";
    Categories["Slots"] = "slots";
    Categories["Sport"] = "sport";
    Categories["Arcade"] = "arcade";
    Categories["Card"] = "card";
    Categories["Lottery"] = "lottery";
    Categories["Roulette"] = "roulette";
    Categories["VideoPoker"] = "video_poker";
    Categories["Fish"] = "fishing";
    return Categories;
}({});
var Title = /*#__PURE__*/ function(Title) {
    Title["Evolution"] = "evolution";
    Title["FastGames"] = "fast_games";
    Title["Jili"] = "jili_gaming";
    Title["Microgaming"] = "micorgaming_slot";
    Title["NetEnt"] = "NetEnt";
    Title["Pgsoft"] = "pgsoft_slot";
    Title["Playngo"] = "playngo";
    Title["RedTiger"] = "red_tiger";
    Title["SportBetting"] = "sport_betting";
    Title["Ainsworth"] = "ainsworth";
    Title["Amatic"] = "amatic";
    Title["AmigoGaming"] = "amigo_gaming";
    Title["Apex"] = "apex";
    Title["Apollo"] = "apollo";
    Title["Aristocrat"] = "aristocrat";
    Title["Bingo"] = "bingo";
    Title["Booming"] = "booming";
    Title["Egaming"] = "egaming";
    Title["Egt"] = "egt";
    Title["Firekirin"] = "firekirin";
    Title["Fish"] = "fish";
    Title["Goldenrace"] = "goldenrace";
    Title["Habanero"] = "habanero";
    Title["Igrosoft"] = "igrosoft";
    Title["Igt"] = "igt";
    Title["Kajot"] = "kajot";
    Title["Keno"] = "keno";
    Title["Mancala"] = "mancala";
    Title["Merkur"] = "merkur";
    Title["Novomatic"] = "novomatic";
    Title["Pragmatic"] = "pragmatic_live_asia";
    Title["Quickspin"] = "quickspin";
    Title["Roulette"] = "roulette";
    Title["Rubyplay"] = "rubyplay";
    Title["ScientificGames"] = "scientific_games";
    Title["TableGames"] = "table_games";
    Title["Vegas"] = "vegas";
    Title["Wazdan"] = "wazdan";
    Title["Zitro"] = "zitro";
    Title["CQ9"] = "cq9_slot";
    Title["SexyGaming"] = "sexygaming";
    Title["PlayTech"] = "playtech";
    Title["EpicWin"] = "epicwin";
    Title["RelaxGaming"] = "relax_gaming";
    Title["TurboGames"] = "turbogames";
    Title["SkyWind"] = "skywind";
    Title["Hacksaw"] = "hacksaw";
    Title["TadaGaming"] = "tada_gaming";
    Title["BGaming"] = "bng";
    Title["KM"] = "km";
    Title["Ezugi"] = "ezugi";
    Title["SmartSoft"] = "smartsoft";
    Title["BTgaming"] = "btgaming";
    Title["_2J"] = "2j";
    Title["_5G"] = "5g";
    Title["PGSGaming"] = "pgsgaming";
    Title["GameArt"] = "game_art";
    Title["OneGaming"] = "onegaming";
    Title["InOut"] = "inout";
    Title["AG"] = "ag";
    Title["EazyGaming"] = "eazy_gaming";
    Title["Ideal"] = "ideal";
    Title["KoolBet"] = "koolbet";
    Title["FaChai"] = "fachai";
    Title["NoLimitCity"] = "nolimitcity";
    Title["BigTimeGaming"] = "big_time_gaming";
    Title["AStar"] = "astar";
    Title["Mini"] = "mini";
    Title["Galaxsys"] = "galaxsys";
    Title["Spribe"] = "spribe";
    Title["V8"] = "v8";
    Title["JDBGaming"] = "jdb_gaming";
    Title["T1"] = "t1";
    Title["YeeBet"] = "yeebet";
    Title["WonWon"] = "wonwon";
    Title["Pix"] = "pix";
    Title["BFlottoBiit"] = "bflottobiit";
    Title["BTI"] = "bti";
    Title["DPESportsGaming"] = "dpesportsgaming";
    Title["DPSportsGaming"] = "dpsportsgaming";
    Title["DreamGaming"] = "dreamgaming";
    Title["LuckySportGaming"] = "luckysportgaming";
    Title["OnGaming"] = "ongaming";
    Title["Rich88"] = "rich88";
    Title["Yggdrasil"] = "yggdrasil";
    return Title;
}({});
}}),
"[project]/src/lib/store.zustond.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_esm__({
    "useCard": (()=>useCard),
    "useGames": (()=>useGames)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$game$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/types/game/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
;
const useCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        card: null,
        setCard: (card)=>set((state)=>({
                    ...state,
                    card
                }))
    }));
const useGames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        games: null,
        isLoading: true,
        error: "",
        providerGames: null,
        isProviderLoading: false,
        getGames: (category, name, limit, provider)=>{
            const state = get();
            const games = state.games;
            // If provider games are available and a provider is selected, use them
            if (provider && provider !== "all" && state.providerGames && state.providerGames[provider]) {
                console.log(`Using provider-specific games for ${provider}`);
                let providerGames = state.providerGames[provider];
                // Apply search filter if provided
                if (name) {
                    const searchLower = name.toLowerCase();
                    providerGames = providerGames.filter((game)=>game.name.toLowerCase().includes(searchLower));
                    console.log(`Provider games filtered by search ${name}: ${providerGames.length}`);
                }
                // Apply limit if provided
                if (limit !== undefined && limit > 0) {
                    return providerGames.slice(0, limit);
                }
                return providerGames;
            }
            if (!games) return null;
            const allGamesArrays = Object.values(games).flat();
            console.log(`Getting games for category: ${category}, search: ${name}, provider: ${provider}`);
            console.log(`Total games available: ${allGamesArrays.length}`);
            let flitedGames = allGamesArrays.filter((game)=>{
                if (category === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$game$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Categories"].Slots) {
                    return game.categories === category || game.categories == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$game$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Categories"].FastGames;
                } else {
                    return game.categories === category;
                }
            });
            console.log(`Games filtered by category ${category}: ${flitedGames.length}`);
            if (provider && provider !== "all") {
                const providerFiltered = allGamesArrays.filter((game)=>game.title === provider);
                console.log(`Games filtered by provider ${provider}: ${providerFiltered.length}`);
                flitedGames = providerFiltered;
            }
            if (name) {
                const searchLower = name.toLowerCase();
                const searchFiltered = flitedGames.filter((game)=>game.name.toLowerCase().includes(searchLower));
                console.log(`Games filtered by search ${name}: ${searchFiltered.length}`);
                flitedGames = searchFiltered;
            }
            if (limit !== undefined && limit > 0) {
                return flitedGames.slice(0, limit);
            }
            return flitedGames;
        },
        getCustomeCategoriesGames: (category, search)=>{
            const games = get().games;
            if (!games) return null;
            const allGamesArrays = Object.values(games).flat();
            let flitedGames;
            if (category == "hot") {
                const gamesId = [
                    "8892",
                    "8891",
                    "8890",
                    "15808",
                    "15814",
                    "15815",
                    "15813",
                    "15810",
                    "15809",
                    "15065",
                    "15056",
                    "15812",
                    "7053",
                    "10269",
                    "9896"
                ];
                flitedGames = allGamesArrays.filter((game)=>gamesId.includes(game.id));
            }
            if (search) {
                const searchLower = search.toLowerCase();
                flitedGames = flitedGames.filter((game)=>game.name.toLowerCase().includes(searchLower));
            }
            return flitedGames;
        },
        getFavoriesGames: (gamesId)=>{
            const games = get().games;
            if (!games) return null;
            const allGamesArrays = Object.values(games).flat();
            const flitedGames = allGamesArrays.filter((game)=>gamesId.includes(game.id));
            return flitedGames;
        },
        setGames: (games)=>set((state)=>({
                    ...state,
                    games
                })),
        setLoading: (isLoading)=>set((state)=>({
                    ...state,
                    isLoading
                })),
        setError: (error)=>set((state)=>({
                    ...state,
                    error
                })),
        setProviderGames: (provider, games)=>set((state)=>({
                    ...state,
                    providerGames: {
                        ...state.providerGames,
                        [provider]: games
                    }
                })),
        setProviderLoading: (isLoading)=>set((state)=>({
                    ...state,
                    isProviderLoading: isLoading
                }))
    }));
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/lib/api/gamexaApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/lib/api/gamexaApi.ts
__turbopack_esm__({
    "convertBDTToIDR": (()=>convertBDTToIDR),
    "convertGameXAToAppFormat": (()=>convertGameXAToAppFormat),
    "createPlayer": (()=>createPlayer),
    "depositToPlayer": (()=>depositToPlayer),
    "fetchAllGames": (()=>fetchAllGames),
    "getAllPlayers": (()=>getAllPlayers),
    "launchGame": (()=>launchGame),
    "loginToGameXA": (()=>loginToGameXA),
    "withdrawFromPlayer": (()=>withdrawFromPlayer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
// ==================== Config ====================
const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || "http://localhost:3000";
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});
// ==================== Auth ====================
let cachedToken = null;
let tokenExpiry = null;
async function loginToGameXA() {
    const now = Date.now();
    if (cachedToken && tokenExpiry && now < tokenExpiry) return cachedToken;
    try {
        const response = await api.post("api/gamexa/auth", {
            agent_code: process.env.GAMEXA_AGENT_CODE,
            password: process.env.GAMEXA_PASSWORD
        });
        const token = response.data.token;
        cachedToken = token;
        tokenExpiry = now + 3600 * 1000; // 1 ঘন্টা cache
        return token;
    } catch (err) {
        console.error("Login failed:", err.message);
        throw new Error("Failed to login to GameXA");
    }
}
async function fetchAllGames(params = {}) {
    const response = await api.get("/api/gamexa/games", {
        params: {
            limit: 6648,
            status: "active",
            ...params
        }
    });
    return response.data;
}
function convertGameXAToAppFormat(gamexaGames) {
    if (!gamexaGames?.games) return [];
    const providerCodeMap = {
        EVOLUTION: "evolution",
        FAST_GAMES: "fast_games",
        JILI: "jili_gaming",
        MICROGAMING: "microgaming_slot",
        NETENT: "NetEnt",
        PGSOFT: "pgsoft_slot",
        PLAYNGO: "playngo",
        REDTIGER: "red_tiger",
        SPORT_BETTING: "sport_betting",
        AINSWORTH: "ainsworth",
        AMATIC: "amatic",
        AMIGO_GAMING: "amigo_gaming",
        APEX: "apex",
        APOLLO: "apollo",
        ARISTOCRAT: "aristocrat",
        BINGO: "bingo",
        BOOMING: "booming",
        EGAMING: "egaming",
        EGT: "egt",
        FIREKIRIN: "firekirin",
        FISH: "fish",
        GOLDENRACE: "goldenrace",
        HABANERO: "habanero_slot",
        IGROSOFT: "igrosoft",
        IGT: "igt",
        KAJOT: "kajot",
        KENO: "keno",
        MANCALA: "mancala",
        MERKUR: "merkur",
        NOVOMATIC: "novomatic",
        PRAGMATIC: "pragmatiplay_slot",
        QUICKSPIN: "quickspin",
        ROULETTE: "roulette",
        RUBYPLAY: "rubyplay",
        SCIENTIFIC_GAMES: "scientific_games",
        TABLE_GAMES: "table_games",
        VEGAS: "vegas",
        WAZDAN: "wazdan",
        ZITRO: "zitro",
        CQ9: "cq9_slot",
        SEXYGAMING: "sexygaming",
        PLAYTECH: "playtech_slot",
        EPICWIN: "epicwin",
        RELAX_GAMING: "relax_gaming",
        TURBOGAMES: "turbogames",
        SKYWIND: "skywind",
        HACKSAW: "hacksaw",
        TADA_GAMING: "tada_gaming",
        B_GAMING: "bgaming",
        KM: "km",
        EZUGI: "ezugi",
        SMARTSOFT: "smartsoft",
        BTGAMING: "btgaming",
        "2J": "2j",
        "5G": "5g",
        PGSGAMING: "pgsgaming",
        GAME_ART: "game_art",
        ONEGAMING: "onegaming",
        INOUT: "inout",
        AG: "ag",
        EAZY_GAMING: "eazy_gaming",
        IDEAL: "ideal",
        KOOLBET: "koolbet",
        FACHAI: "fachai",
        NOLIMITCITY: "nolimitcity",
        BIG_TIME_GAMING: "big_time_gaming",
        ASTAR: "astar",
        MINI: "mini",
        GALAXSYS: "galaxsys",
        SPRIBE: "spribe",
        V8: "v8",
        JDB_GAMING: "jdb_gaming",
        T1: "t1",
        YEEBET: "yeebet",
        WONWON: "wonwon",
        PIX: "pix",
        B_FLOTTOBIIT: "bflottobiit",
        BTI: "bti",
        DPESPORTSGAMING: "dpesportsgaming",
        DPSPORTSGAMING: "dpsportsgaming",
        DREAMGAMING: "dreamgaming",
        LUCKYSPORTGAMING: "luckysportgaming",
        ONGAMING: "ongaming"
    };
    return gamexaGames.games.map((game)=>{
        let category;
        switch(game.game_type){
            case "slot":
                category = "slots";
                break;
            case "table":
            case "card":
                category = "live_dealers";
                break;
            case "lottery":
                category = "lottery";
                break;
            case "sports":
                category = "sport";
                break;
            case "poker":
            case "video_poker":
                category = "video_poker";
                break;
            case "fishing":
                category = "fishing";
                break;
            default:
                category = "slots";
        }
        const title = providerCodeMap[game.provider_code.toUpperCase()] || game.provider_code.toLowerCase();
        return {
            id: game.game_uid,
            name: game.game_name,
            img: game.image_url,
            device: "mobile,desktop",
            title: title,
            categories: category,
            bm: "0",
            demo: "1",
            rewriterule: "0",
            exitButton: "1"
        };
    });
}
async function createPlayer(data) {
    try {
        // Build payload properly - don't overwrite full_name if it's already provided
        const payload = {
            ...data,
            // Only construct full_name from first_name + last_name if full_name is not provided
            full_name: data.full_name || `${data.first_name || ''} ${data.last_name || ''}`.trim()
        };
        console.log("GameXA createPlayer payload:", payload); // ✅ debug payload
        const response = await api.post("api/gamexa/players", payload);
        console.log("GameXA createPlayer response:", response.data); // ✅ debug response
        return response.data;
    } catch (error) {
        console.error("Error creating player in GameXA API:", error.response?.data || error.message);
        throw error;
    }
}
async function getAllPlayers(query) {
    const params = new URLSearchParams();
    if (query?.page) params.append('page', query.page.toString());
    if (query?.limit) params.append('limit', query.limit.toString());
    if (query?.search) params.append('search', query.search);
    if (query?.status) params.append('status', query.status);
    const response = await api.get(`api/gamexa/players?${params.toString()}`);
    return response.data;
}
async function depositToPlayer(playerId, amount, referenceId) {
    try {
        const response = await api.post(`api/gamexa/players/${playerId}/deposit`, {
            amount,
            reference_id: referenceId
        });
        return response.data;
    } catch (error) {
        console.error("Error depositing to player:", error.response?.data || error.message);
        throw error;
    }
}
async function withdrawFromPlayer(playerId, amount) {
    try {
        const response = await api.post(`api/gamexa/players/${playerId}/withdraw`, {
            amount
        });
        return response.data;
    } catch (error) {
        console.error("Error withdrawing from player:", error.response?.data || error.message);
        throw error;
    }
}
function convertBDTToIDR(amount) {
    const rate = 230; // 1 BDT = 230 IDR (example)
    return amount * rate;
}
async function launchGame(playerId, gameUid, lobbyUrl) {
    try {
        const response = await api.post("/api/gamexa/games/launch", {
            player_id: playerId,
            game_uid: gameUid,
            lobby_url: lobbyUrl
        });
        return response.data;
    } catch (error) {
        console.error("Error launching game in GameXA API:", error.response?.data || error.message);
        throw error;
    }
}
}}),
"[project]/src/app/GamesLoader.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$features$2f$gamesApiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/features/gamesApiSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$zustond$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/store.zustond.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$gamexaApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/api/gamexaApi.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const GamesLoader = ()=>{
    const [fetchGamesList, { data: data, isLoading, error: apiError }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$features$2f$gamesApiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFetchGamesListMutation"])();
    const [gamexaGames, setGamexaGames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [gamexaLoading, setGamexaLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [gamexaError, setGamexaError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { setLoading, setGames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$zustond$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGames"])((state)=>state);
    // Fetch games from original API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchGamesList({
            game_type: "all"
        });
    }, [
        fetchGamesList
    ]);
    // Fetch games from GameXA API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const getGamexaGames = async ()=>{
            try {
                console.log("Fetching GameXA games...");
                const gamesData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$gamexaApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAllGames"])();
                console.log(`GameXA games fetched successfully: ${gamesData.games?.length || 0} games`);
                setGamexaGames(gamesData);
                setGamexaError(null);
            } catch (error) {
                console.error("Error fetching GameXA games:", error);
                setGamexaError(error);
            } finally{
                setGamexaLoading(false);
            }
        };
        getGamexaGames();
    }, []);
    // Combine games from both APIs or use just GameXA games if original API fails
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // If GameXA games are loaded
        if (gamexaGames && !gamexaLoading && !gamexaError) {
            try {
                // Convert GameXA games to app format
                const formattedGamexaGames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$gamexaApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertGameXAToAppFormat"])(gamexaGames);
                console.log(`Converted ${formattedGamexaGames.length} GameXA games to app format`);
                // Create provider categories from GameXA games
                const providerGames = {};
                formattedGamexaGames.forEach((game)=>{
                    const provider = game.title;
                    if (!providerGames[provider]) {
                        providerGames[provider] = [];
                    }
                    providerGames[provider].push(game);
                });
                // Also group by categories for easier filtering
                const categoryGames = {};
                formattedGamexaGames.forEach((game)=>{
                    const category = game.categories;
                    if (!categoryGames[category]) {
                        categoryGames[category] = [];
                    }
                    categoryGames[category].push(game);
                });
                // Combine provider and category groups
                const combinedProviderAndCategoryGames = {
                    ...providerGames,
                    ...categoryGames
                };
                // Log category counts for debugging
                Object.keys(combinedProviderAndCategoryGames).forEach((category)=>{
                    console.log(`Category/Provider ${category}: ${combinedProviderAndCategoryGames[category].length} games`);
                });
                // Log all categories for debugging
                console.log("All categories/providers:", Object.keys(combinedProviderAndCategoryGames));
                // If original API data is available, combine them
                if (data && !isLoading) {
                    const combinedGames = {
                        ...data.gamesList,
                        ...combinedProviderAndCategoryGames
                    };
                    // Ensure fishing and video_poker categories are included
                    if (combinedProviderAndCategoryGames.fishing && !combinedGames.fishing) {
                        combinedGames.fishing = combinedProviderAndCategoryGames.fishing;
                    }
                    if (combinedProviderAndCategoryGames.video_poker && !combinedGames.video_poker) {
                        combinedGames.video_poker = combinedProviderAndCategoryGames.video_poker;
                    }
                    console.log("Setting combined games:", Object.keys(combinedGames).length, "providers/categories");
                    setLoading(false);
                    setGames(combinedGames);
                } else if (apiError || !data && !isLoading) {
                    console.log("Original API failed, using only GameXA games:", Object.keys(combinedProviderAndCategoryGames).length, "providers/categories");
                    setLoading(false);
                    setGames(combinedProviderAndCategoryGames);
                }
            } catch (error) {
                console.error("Error processing GameXA games:", error);
            }
        } else if (data && !isLoading) {
            console.log("Setting only original API games");
            setLoading(false);
            setGames(data.gamesList);
        } else if ((apiError || !data && !isLoading) && (gamexaError || !gamexaGames && !gamexaLoading)) {
            console.log("Both APIs failed, setting empty games list");
            console.error("Original API error:", apiError);
            console.error("GameXA API error:", gamexaError);
            setLoading(false);
            setGames({});
        }
    }, [
        data,
        isLoading,
        apiError,
        gamexaGames,
        gamexaLoading,
        gamexaError
    ]);
    return null;
};
const __TURBOPACK__default__export__ = GamesLoader;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[project]/src/components/notifications/notification-toaster.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ // components/notification-toaster.tsx
__turbopack_esm__({
    "NotificationToaster": (()=>NotificationToaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pusher$2d$js$2f$dist$2f$node$2f$pusher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/pusher-js/dist/node/pusher.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const iconMap = {
    MONEY: "💲",
    BELL: "🔔",
    TROPHY: "🏆",
    WARNING: "⚠️",
    INFO: "ℹ️",
    default: "🔔"
};
function NotificationToaster({ userId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const createContainer = ()=>{
            const container = document.createElement("div");
            container.id = "notification-container";
            container.className = `
        fixed bottom-4 right-4
        space-y-3
        z-50
        w-full max-w-xs
      `;
            document.body.appendChild(container);
            return container;
        };
        const pusher = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pusher$2d$js$2f$dist$2f$node$2f$pusher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](("TURBOPACK compile-time value", "7e03d2def5a250141d34"), {
            cluster: ("TURBOPACK compile-time value", "ap1")
        });
        const channel = pusher.subscribe(`user-${userId}`);
        channel.bind("new-notification", (notification)=>{
            const toastId = `toast-${Date.now()}`;
            const toastElement = document.createElement("div");
            toastElement.id = toastId;
            toastElement.className = `
        notification-toast
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        rounded-lg shadow-lg
        px-4
        py-2
        cursor-pointer
        transform transition-all duration-300
        animate-in slide-in-from-right-8
        hover:shadow-xl
        relative
        overflow-hidden
      `;
            // Add progress bar
            const progressBar = document.createElement("div");
            progressBar.className = `
        absolute bottom-0 left-0 right-0 h-1 bg-blue-500/20
        origin-left
        animate-progress
      `;
            progressBar.style.animationDuration = "5000ms";
            toastElement.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="text-2xl">
            ${iconMap[notification.icon] || iconMap.default}
          </span>
          <div class="flex-1">
            <h4 class="font-semibold text-gray-900 dark:text-white">
              ${notification.title}
            </h4>
            ${notification.description ? `
              <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                ${notification.description}
              </p>
            ` : ""}
          </div>
          <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <X class="h-4 w-4" />
          </button>
        </div>
      `;
            toastElement.appendChild(progressBar);
            // Add close button functionality
            const closeButton = toastElement.querySelector("button");
            closeButton?.addEventListener("click", (e)=>{
                e.stopPropagation();
                dismissToast(toastElement);
            });
            // Add click handler
            toastElement.addEventListener("click", ()=>{
                router.push("/notifications");
                dismissToast(toastElement);
            });
            // Add to container
            const container = document.getElementById("notification-container") || createContainer();
            container.prepend(toastElement);
            // Auto-dismiss after 5 seconds
            const timeoutId = setTimeout(()=>{
                dismissToast(toastElement);
            }, 5000);
            // Store timeout ID for cleanup
            toastElement.dataset.timeoutId = timeoutId.toString();
        });
        const dismissToast = (toastElement)=>{
            toastElement.classList.add("animate-out", "fade-out", "slide-out-to-right-8");
            toastElement.addEventListener("animationend", ()=>{
                const timeoutId = toastElement.dataset.timeoutId;
                if (timeoutId) clearTimeout(parseInt(timeoutId));
                toastElement.remove();
            });
        };
        return ()=>{
            channel.unbind_all();
            channel.unsubscribe();
            // Clean up any remaining toasts
            document.getElementById("notification-container")?.remove();
        };
    }, [
        userId,
        router
    ]);
    return null;
}
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__7ef502._.js.map