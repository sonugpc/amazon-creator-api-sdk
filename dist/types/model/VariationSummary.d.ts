export default VariationSummary;
/**
 * The VariationSummary model module.
 * @module model/VariationSummary
 * @version 1.0.0
 */
declare class VariationSummary {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>VariationSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VariationSummary} obj Optional instance to populate.
     * @return {module:model/VariationSummary} The populated <code>VariationSummary</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>VariationSummary</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VariationSummary</code>.
     */
    static validateJSON(data: any): boolean;
    pageCount: any;
    price: any;
    variationCount: any;
    variationDimensions: any;
}
