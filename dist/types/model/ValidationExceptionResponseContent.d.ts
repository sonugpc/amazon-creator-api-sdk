export default ValidationExceptionResponseContent;
/**
 * The ValidationExceptionResponseContent model module.
 * @module model/ValidationExceptionResponseContent
 * @version 1.0.0
 */
declare class ValidationExceptionResponseContent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, message: any, reason: any): void;
    /**
     * Constructs a <code>ValidationExceptionResponseContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationExceptionResponseContent} obj Optional instance to populate.
     * @return {module:model/ValidationExceptionResponseContent} The populated <code>ValidationExceptionResponseContent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ValidationExceptionResponseContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValidationExceptionResponseContent</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ValidationExceptionResponseContent</code>.
     * The input fails to satisfy the constraints specified by the service. Use ValidationExceptionReason and fieldList to identify specific issues.
     * @alias module:model/ValidationExceptionResponseContent
     * @param message {String}
     * @param reason {module:model/ValidationExceptionReason}
     */
    constructor(message: string, reason: any);
    type: any;
    message: any;
    reason: any;
    fieldList: any;
}
declare namespace ValidationExceptionResponseContent {
    let RequiredProperties: string[];
}
