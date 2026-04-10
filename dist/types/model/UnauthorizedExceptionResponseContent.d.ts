export default UnauthorizedExceptionResponseContent;
/**
 * The UnauthorizedExceptionResponseContent model module.
 * @module model/UnauthorizedExceptionResponseContent
 * @version 1.0.0
 */
declare class UnauthorizedExceptionResponseContent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, reason: any): void;
    /**
     * Constructs a <code>UnauthorizedExceptionResponseContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnauthorizedExceptionResponseContent} obj Optional instance to populate.
     * @return {module:model/UnauthorizedExceptionResponseContent} The populated <code>UnauthorizedExceptionResponseContent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UnauthorizedExceptionResponseContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UnauthorizedExceptionResponseContent</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UnauthorizedExceptionResponseContent</code>.
     * Exception indicating missing or bad authentication for the operation.
     * @alias module:model/UnauthorizedExceptionResponseContent
     * @param reason {module:model/UnauthorizedExceptionReason}
     */
    constructor(reason: any);
    type: any;
    message: any;
    reason: any;
}
declare namespace UnauthorizedExceptionResponseContent {
    let RequiredProperties: string[];
}
