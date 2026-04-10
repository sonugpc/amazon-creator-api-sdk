export default ValidationExceptionField;
/**
 * The ValidationExceptionField model module.
 * @module model/ValidationExceptionField
 * @version 1.0.0
 */
declare class ValidationExceptionField {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, message: any): void;
    /**
     * Constructs a <code>ValidationExceptionField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationExceptionField} obj Optional instance to populate.
     * @return {module:model/ValidationExceptionField} The populated <code>ValidationExceptionField</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ValidationExceptionField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValidationExceptionField</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ValidationExceptionField</code>.
     * Stores information about a field that failed validation
     * @alias module:model/ValidationExceptionField
     * @param name {String}
     * @param message {String}
     */
    constructor(name: string, message: string);
    name: any;
    message: any;
}
declare namespace ValidationExceptionField {
    let RequiredProperties: string[];
}
