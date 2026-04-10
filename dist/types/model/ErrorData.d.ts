export default ErrorData;
/**
 * The ErrorData model module.
 * @module model/ErrorData
 * @version 1.0.0
 */
declare class ErrorData {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, code: any, message: any): void;
    /**
     * Constructs a <code>ErrorData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorData} obj Optional instance to populate.
     * @return {module:model/ErrorData} The populated <code>ErrorData</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ErrorData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorData</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ErrorData</code>.
     * Error information for partial failures within a successful response. Used when an operation succeeds overall but encounters errors for specific items or resources.
     * @alias module:model/ErrorData
     * @param code {String} A unique code identifying the specific error condition (e.g., 'InvalidItemId', 'ItemNotFound')
     * @param message {String} A human-readable description of the error
     */
    constructor(code: string, message: string);
    code: any;
    message: any;
}
declare namespace ErrorData {
    let RequiredProperties: string[];
}
