export = OAuth2TokenManager;
/**
 * OAuth2 token manager that handles token acquisition, caching, and automatic refresh
 * Note: ApiClient automatically manages token caching for optimal performance.
 * Direct instantiation is only needed for advanced use cases.
 * @class OAuth2TokenManager
 */
declare class OAuth2TokenManager {
    /**
     * Creates an OAuth2TokenManager instance
     * @param {OAuth2Config} config - The OAuth2 configuration
     */
    constructor(config: OAuth2Config);
    config: OAuth2Config;
    accessToken: any;
    expiresAt: number;
    /**
     * Gets a valid OAuth2 access token, refreshing if necessary
     * @returns {Promise<string>} A promise that resolves to a valid access token
     * @throws {Error} If token acquisition fails
     */
    getToken(): Promise<string>;
    /**
     * Checks if the current token is valid and not expired
     * @returns {boolean} True if the token is valid, false otherwise
     */
    isTokenValid(): boolean;
    /**
     * Refreshes the OAuth2 access token using client credentials grant
     * @returns {Promise<string>} A promise that resolves to the new access token
     * @throws {Error} If token refresh fails
     */
    refreshToken(): Promise<string>;
    /**
     * Clears the cached token, forcing a refresh on the next getToken() call
     */
    clearToken(): void;
}
