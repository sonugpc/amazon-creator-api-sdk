/**
* Enum class UnauthorizedExceptionReason.
* @enum {}
* @readonly
*/
export default class UnauthorizedExceptionReason {
    /**
    * Returns a <code>UnauthorizedExceptionReason</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/UnauthorizedExceptionReason} The enum <code>UnauthorizedExceptionReason</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "TokenExpired"
     * @const
     */
    TokenExpired: string;
    /**
     * value: "InvalidToken"
     * @const
     */
    InvalidToken: string;
    /**
     * value: "InvalidIssuer"
     * @const
     */
    InvalidIssuer: string;
    /**
     * value: "MissingClaim"
     * @const
     */
    MissingClaim: string;
    /**
     * value: "MissingKeyId"
     * @const
     */
    MissingKeyId: string;
    /**
     * value: "UnsupportedClient"
     * @const
     */
    UnsupportedClient: string;
    /**
     * value: "InvalidClient"
     * @const
     */
    InvalidClient: string;
    /**
     * value: "MissingCredential"
     * @const
     */
    MissingCredential: string;
    /**
     * value: "Other"
     * @const
     */
    Other: string;
}
/**
 * *
 */
export type UnauthorizedExceptionReason = any;
