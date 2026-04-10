export default AccessDeniedExceptionResponseContent;
/**
 * The AccessDeniedExceptionResponseContent model module.
 * @module model/AccessDeniedExceptionResponseContent
 * @version 1.0.0
 */
declare class AccessDeniedExceptionResponseContent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, message: any, reason: any): void;
    /**
     * Constructs a <code>AccessDeniedExceptionResponseContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccessDeniedExceptionResponseContent} obj Optional instance to populate.
     * @return {module:model/AccessDeniedExceptionResponseContent} The populated <code>AccessDeniedExceptionResponseContent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AccessDeniedExceptionResponseContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccessDeniedExceptionResponseContent</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AccessDeniedExceptionResponseContent</code>.
     * User does not have sufficient access to perform this action.
     * @alias module:model/AccessDeniedExceptionResponseContent
     * @param message {String}
     * @param reason {module:model/AccessDeniedReason}
     */
    constructor(message: string, reason: any);
    type: any;
    message: any;
    reason: any;
}
declare namespace AccessDeniedExceptionResponseContent {
    let RequiredProperties: string[];
}
