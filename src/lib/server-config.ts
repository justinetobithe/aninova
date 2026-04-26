import "server-only";

export const serverConfig = {
    malApiBaseUrl:
        process.env.MAL_API_BASE_URL || "https://api.myanimelist.net/v2",
    malClientId: process.env.MAL_CLIENT_ID || "",
};