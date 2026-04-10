/**
* Enum class AccessDeniedReason.
* @enum {}
* @readonly
*/
export default class AccessDeniedReason {
    /**
    * Returns a <code>AccessDeniedReason</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AccessDeniedReason} The enum <code>AccessDeniedReason</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "AssociateNotEligible"
     * @const
     */
    AssociateNotEligible: string;
    /**
     * value: "AuthorizationFailed"
     * @const
     */
    AuthorizationFailed: string;
    /**
     * value: "Other"
     * @const
     */
    Other: string;
}
/**
 * *
 */
export type AccessDeniedReason = any;
