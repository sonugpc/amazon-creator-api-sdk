export default ThrottleExceptionResponseContent;
/**
 * The ThrottleExceptionResponseContent model module.
 * @module model/ThrottleExceptionResponseContent
 * @version 1.0.0
 */
declare class ThrottleExceptionResponseContent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, message: any): void;
    /**
     * Constructs a <code>ThrottleExceptionResponseContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThrottleExceptionResponseContent} obj Optional instance to populate.
     * @return {module:model/ThrottleExceptionResponseContent} The populated <code>ThrottleExceptionResponseContent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ThrottleExceptionResponseContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ThrottleExceptionResponseContent</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ThrottleExceptionResponseContent</code>.
     * Request was denied due to request throttling. Clients should implement exponential backoff and retry.
     * @alias module:model/ThrottleExceptionResponseContent
     * @param message {String}
     */
    constructor(message: string);
    type: any;
    message: any;
    serviceCode: any;
    quotaCode: any;
}
declare namespace ThrottleExceptionResponseContent {
    let RequiredProperties: string[];
}
