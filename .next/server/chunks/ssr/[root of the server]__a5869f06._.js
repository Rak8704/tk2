module.exports = {

"[project]/src/error.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Come from internal server
 * That is not for user issues
 * @type {string}
 */ __turbopack_context__.s({
    "CURRENT_ICORRECT_PASSOWRD": (()=>CURRENT_ICORRECT_PASSOWRD),
    "INTERNAL_SERVER_ERROR": (()=>INTERNAL_SERVER_ERROR)
});
const INTERNAL_SERVER_ERROR = "Somthing went wrong! Try Again";
const CURRENT_ICORRECT_PASSOWRD = "password is incorrect";
}}),
"[project]/src/data/user.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findCurrentUser": (()=>findCurrentUser),
    "findUserById": (()=>findUserById),
    "findUserByPhone": (()=>findUserByPhone),
    "findUserByPlayerId": (()=>findUserByPlayerId),
    "findUserByReferId": (()=>findUserByReferId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
;
;
const findUserById = async (id)=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
        where: {
            id
        }
    });
};
const findUserByPhone = async (phone)=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
        where: {
            phone
        }
    });
};
const findUserByPlayerId = async (playerId)=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
        where: {
            playerId
        }
    });
};
const findUserByReferId = async (referId)=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
        where: {
            referId
        }
    });
};
const findCurrentUser = async ()=>{
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    console.log("session in findCurrentUser:", session);
    // Ensure we return a proper user object with ID
    if (session?.user) {
        console.log("User found in session:", session.user);
        return session.user;
    }
    console.log("No user found in session");
    return null;
};
}}),
"[project]/src/lib/helpers.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cardNumberGenerate": (()=>cardNumberGenerate),
    "playerIdGenerate": (()=>playerIdGenerate),
    "referIdGenerate": (()=>referIdGenerate),
    "trackingNumberGenerate": (()=>trackingNumberGenerate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
;
;
const playerIdGenerate = async ()=>{
    let id = "";
    let hasUser = true;
    while(hasUser){
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        id = (array[0] % 9000000000 + 1000000000).toString();
        const alreadyExist = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findUserByPlayerId"])(id);
        if (!alreadyExist) {
            hasUser = false;
        }
    }
    return id;
};
const referIdGenerate = async ()=>{
    let referralId = "";
    let hasUser = true;
    while(hasUser){
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(let i = 0; i < 6; i++){
            const randomIndex = Math.floor(Math.random() * chars.length);
            referralId += chars[randomIndex];
        }
        const alreadyExist = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findUserByPlayerId"])(referralId);
        if (!alreadyExist) {
            hasUser = false;
        }
    }
    return referralId;
};
const trackingNumberGenerate = async ()=>{
    let trackingNumber = "";
    let hasUser = true;
    while(hasUser){
        const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, "").slice(0, 14); // e.g., 20250414162400
        const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
        trackingNumber = `${timestamp}-${randomPart}`;
        const alreadyExist = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].deposit.findUnique({
            where: {
                trackingNumber: trackingNumber
            }
        });
        if (!alreadyExist) {
            hasUser = false;
        }
    }
    return trackingNumber;
};
const cardNumberGenerate = async ()=>{
    let cardNumber = "";
    let hasUser = true;
    while(hasUser){
        for(let i = 0; i < 15; i++){
            cardNumber += Math.floor(Math.random() * 10);
        }
        const alreadyExist = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].card.findFirst({
            where: {
                cardNumber: cardNumber
            }
        });
        if (!alreadyExist) {
            hasUser = false;
        }
    }
    return cardNumber;
};
}}),
"[project]/src/success.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Success message for a successfull registation
 * @type {string}
 */ __turbopack_context__.s({
    "LOGIN_SUCCESS": (()=>LOGIN_SUCCESS),
    "NAME_CHANGED": (()=>NAME_CHANGED),
    "PASSWORD_CHANGED": (()=>PASSWORD_CHANGED),
    "PHONE_CHANGED": (()=>PHONE_CHANGED),
    "SIGNUP_SUCCESS": (()=>SIGNUP_SUCCESS)
});
const SIGNUP_SUCCESS = "Sign-up successful!";
const LOGIN_SUCCESS = "Log-in successful!";
const PASSWORD_CHANGED = "Password has changed successful!";
const NAME_CHANGED = "Name has changed successful!";
const PHONE_CHANGED = "Phone number has changed successful!";
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/lib/api/gamexaApi.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/lib/api/gamexaApi.ts
__turbopack_context__.s({
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
// ==================== Config ====================
const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || "http://localhost:3000";
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
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
"[project]/src/action/register.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f45e2e376c0858eb296d73801999165f73216cacb":"register"} */ __turbopack_context__.s({
    "register": (()=>register)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/error.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/helpers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$success$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/success.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$gamexaApi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/gamexaApi.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ register = async (data)=>{
    try {
        const { password, confirmPassword, phone, ageCheck, bonusCheck, referralId } = data;
        // ---------------- Validations ----------------
        if (password !== confirmPassword) return {
            error: "Confirm Password did not match"
        };
        if (!ageCheck) return {
            error: "Read Out age Restrictions"
        };
        const existingUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findUserByPhone"])(phone);
        if (existingUser) return {
            error: "Number is already registered"
        };
        // ---------------- Referral Setup ----------------
        let invitedBy = {};
        let isReferralBonusActive = false;
        const referralUser = referralId ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findUserByReferId"])(referralId) : null;
        if (referralUser) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].invitationBonus.update({
                where: {
                    userId: referralUser.id
                },
                data: {
                    totalRegisters: {
                        increment: 1
                    }
                }
            });
            isReferralBonusActive = true;
            invitedBy = {
                create: {
                    user: {
                        connect: {
                            id: referralUser.id
                        }
                    }
                }
            };
        }
        // ---------------- Hash Password + Generate referId ----------------
        const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        const referId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["referIdGenerate"])();
        // ---------------- GameXA Player Creation ----------------
        let gameXAPlayerId = null;
        try {
            const playerResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$gamexaApi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPlayer"])({
                username: phone,
                email: `${phone}@tk1111.com`,
                full_name: `Guest ${Date.now()}`,
                phone,
                currency: "IDR",
                password
            });
            console.log("Full GameXA player response:", JSON.stringify(playerResponse, null, 2));
            // Extract player ID based on GameXA API documentation
            // GameXA returns: { "message": "Player created successfully", "player": { "id": 1, ... } }
            gameXAPlayerId = playerResponse?.player?.id?.toString() || playerResponse?.id?.toString() || playerResponse?.player_id?.toString() || playerResponse?.data?.player?.id?.toString() || playerResponse?.data?.id?.toString() || playerResponse?.data?.player_id?.toString();
            if (!gameXAPlayerId) {
                console.error("GameXA Player ID extraction failed. Response structure:", {
                    hasPlayerId: !!playerResponse?.player_id,
                    hasPlayerObject: !!playerResponse?.player,
                    hasId: !!playerResponse?.id,
                    hasData: !!playerResponse?.data,
                    hasResult: !!playerResponse?.result,
                    responseKeys: Object.keys(playerResponse || {}),
                    dataKeys: playerResponse?.data ? Object.keys(playerResponse.data) : null
                });
                throw new Error(`Failed to get GameXA playerId. Response: ${JSON.stringify(playerResponse)}`);
            }
            console.log("GameXA player created successfully:", gameXAPlayerId);
        } catch (err) {
            const error = err;
            console.error("GameXA creation failed:", {
                error: error.message,
                stack: error.stack,
                response: error.response?.data,
                status: error.response?.status
            });
            return {
                error: `Failed to create player in GameXA: ${error.message}. Registration aborted.`
            };
        }
        // ---------------- Create Player in DB ----------------
        const newPlayer = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].player.create({
            data: {
                playerId: gameXAPlayerId,
                name: `Guest ${Date.now()}`,
                email: `${phone}@tk1111.com`
            }
        });
        // ---------------- Create User + Wallet in DB ----------------
        const newUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.create({
            data: {
                phone,
                email: `${phone}@tk1111.com`,
                password: hashedPassword,
                playerId: newPlayer.playerId,
                gameXAPlayerId: newPlayer.playerId,
                referId,
                isBanned: false,
                invitedBy,
                bettingRecord: {
                    create: {}
                },
                wallet: {
                    create: {
                        balance: 0,
                        signinBonus: bonusCheck,
                        referralBonus: isReferralBonusActive,
                        currency: "BDT",
                        playerId: newPlayer.id
                    }
                },
                inviationBonus: {
                    create: {}
                }
            }
        });
        // ---------------- Update Referral ----------------
        if (referralUser) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].invitation.update({
                where: {
                    userId: referralUser.id
                },
                data: {
                    referredUsers: {
                        connect: {
                            id: newUser.id
                        }
                    }
                }
            });
        }
        // ---------------- Auto Sign In ----------------
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signIn"])("credentials", {
                phone: newUser.phone,
                password,
                redirect: false
            });
        } catch (error) {
            console.error("SignIn Error:", error);
        }
        return {
            success: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$success$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOGIN_SUCCESS"]
        };
    } catch (error) {
        console.error("Register Error:", error);
        return {
            error: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$error$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERNAL_SERVER_ERROR"]
        };
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    register
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(register, "7f45e2e376c0858eb296d73801999165f73216cacb", null);
}}),
"[project]/.next-internal/server/app/(auth)/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/action/register.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/.next-internal/server/app/(auth)/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/action/register.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$action$2f$register$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/action/register.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$action$2f$register$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(auth)/register/page/actions.js { ACTIONS_MODULE0 => "[project]/src/action/register.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(auth)/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/action/register.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7f45e2e376c0858eb296d73801999165f73216cacb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$action$2f$register$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["register"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$action$2f$register$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/action/register.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$action$2f$register$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(auth)/register/page/actions.js { ACTIONS_MODULE0 => "[project]/src/action/register.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(auth)/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/action/register.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7f45e2e376c0858eb296d73801999165f73216cacb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$action$2f$register$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f45e2e376c0858eb296d73801999165f73216cacb"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$action$2f$register$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(auth)/register/page/actions.js { ACTIONS_MODULE0 => "[project]/src/action/register.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$action$2f$register$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(auth)/register/page/actions.js { ACTIONS_MODULE0 => "[project]/src/action/register.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/public/logo.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/logo.aae2ff95.png");}}),
"[project]/public/logo.png.mjs { IMAGE => \"[project]/public/logo.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/logo.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 277,
    height: 139,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAV0lEQVR42o2MuQqAMBAFs1UQkXglwVgEIdp4rNh4NCLr/3+TjWiRJg9eMwzDWMjKhMujU/vSyBltgWjzSYtIf0IW83Rzar16c9Jg6B5raivhvBIA/H/ZA6ROBqB19XeBAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 4
};
}}),
"[project]/src/components/auth/AuthContainer.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// import Variant1 from "@/components/icons/Variant1";
// import Variant2 from "@/components/icons/Variant2";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/logo.png.mjs { IMAGE => "[project]/public/logo.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
;
const AuthContainer = ({ formRedirectText, formRedirectLink, formRedirectLinkPlaceholder, children, title })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[url(https://c.animaapp.com/m9drzmnaxdV67z/img/background.png)] bg-[#003e3e] bg-cover bg-[50%_50%] w-h-full h-screen ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center py-5 pt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    alt: "ck444",
                    className: "w-[100px] h-auto"
                }, void 0, false, {
                    fileName: "[project]/src/components/auth/AuthContainer.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/auth/AuthContainer.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-[#ffb800] font-bold text-xl mb-3",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/auth/AuthContainer.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/90 text-sm text-center mt-3",
                        children: [
                            formRedirectText,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: formRedirectLink,
                                className: "text-[#41cbd0] font-semibold hover:underline",
                                children: formRedirectLinkPlaceholder
                            }, void 0, false, {
                                fileName: "[project]/src/components/auth/AuthContainer.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/auth/AuthContainer.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/auth/AuthContainer.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[80%] mx-auto mt-8 max-w-[400px]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/auth/AuthContainer.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/auth/AuthContainer.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AuthContainer;
}}),
"[project]/src/components/auth/RegisterForm.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/auth/RegisterForm.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/auth/RegisterForm.tsx <module evaluation>", "default");
}}),
"[project]/src/components/auth/RegisterForm.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/auth/RegisterForm.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/auth/RegisterForm.tsx", "default");
}}),
"[project]/src/components/auth/RegisterForm.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$RegisterForm$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/auth/RegisterForm.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$RegisterForm$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/auth/RegisterForm.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$RegisterForm$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(auth)/register/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthContainer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthContainer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$RegisterForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/RegisterForm.tsx [app-rsc] (ecmascript)");
;
;
;
const Register = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthContainer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            title: "Register",
            formRedirectLinkPlaceholder: "Login",
            formRedirectText: "You already have an account",
            formRedirectLink: "/login",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$RegisterForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/(auth)/register/page.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(auth)/register/page.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(auth)/register/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Register;
}}),
"[project]/src/app/(auth)/register/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(auth)/register/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__a5869f06._.js.map