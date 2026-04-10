export = OAuth2Config;
/**
 * Copyright 2025 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
/**
 * OAuth2 configuration class that manages version-specific cognito endpoints
 * @class OAuth2Config
 */
declare class OAuth2Config {
    static COGNITO_SCOPE: string;
    static LWA_SCOPE: string;
    static GRANT_TYPE: string;
    /**
     * Creates an OAuth2Config instance
     * @param {string} credentialId - The OAuth2 credential ID
     * @param {string} credentialSecret - The OAuth2 credential secret
     * @param {string} version - The OAuth2 token version (determines the token endpoint)
     * @param {string} authEndpoint - OAuth2 auth endpoint URL
     */
    constructor(credentialId: string, credentialSecret: string, version: string, authEndpoint: string);
    credentialId: string;
    credentialSecret: string;
    version: string;
    authEndpoint: string;
    cognitoEndpoint: string;
    /**
     * Determines the token endpoint to use
     * @returns {string} The OAuth2 token endpoint URL
     * @throws {Error} If the version is not supported and no custom authEndpoint is provided
     */
    determineTokenEndpoint(): string;
    /**
     * Checks if this is an LWA (v3.x) configuration
     * @returns {boolean} True if using LWA authentication
     */
    isLwa(): boolean;
    /**
     * Gets the credential ID
     * @returns {string} The credential ID
     */
    getCredentialId(): string;
    /**
     * Gets the credential secret
     * @returns {string} The credential secret
     */
    getCredentialSecret(): string;
    /**
     * Gets the credential version
     * @returns {string} The credential version
     */
    getVersion(): string;
    /**
     * Gets the Cognito token endpoint URL
     * @returns {string} The token endpoint URL
     */
    getCognitoEndpoint(): string;
    /**
     * Gets the OAuth2 scope
     * @returns {string} The OAuth2 scope
     */
    getScope(): string;
    /**
     * Gets the OAuth2 grant type
     * @returns {string} The OAuth2 grant type
     */
    getGrantType(): string;
}
