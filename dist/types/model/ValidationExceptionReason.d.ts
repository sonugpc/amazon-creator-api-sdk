/**
* Enum class ValidationExceptionReason.
* @enum {}
* @readonly
*/
export default class ValidationExceptionReason {
    /**
    * Returns a <code>ValidationExceptionReason</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ValidationExceptionReason} The enum <code>ValidationExceptionReason</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "UnknownOperation"
     * @const
     */
    UnknownOperation: string;
    /**
     * value: "CannotParse"
     * @const
     */
    CannotParse: string;
    /**
     * value: "FieldValidationFailed"
     * @const
     */
    FieldValidationFailed: string;
    /**
     * value: "InvalidAssociate"
     * @const
     */
    InvalidAssociate: string;
    /**
     * value: "InvalidPartnerTag"
     * @const
     */
    InvalidPartnerTag: string;
    /**
     * value: "Other"
     * @const
     */
    Other: string;
}
/**
 * *
 */
export type ValidationExceptionReason = any;
