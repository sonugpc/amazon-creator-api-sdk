export default DimensionBasedAttribute;
/**
 * The DimensionBasedAttribute model module.
 * @module model/DimensionBasedAttribute
 * @version 1.0.0
 */
declare class DimensionBasedAttribute {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>DimensionBasedAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DimensionBasedAttribute} obj Optional instance to populate.
     * @return {module:model/DimensionBasedAttribute} The populated <code>DimensionBasedAttribute</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>DimensionBasedAttribute</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DimensionBasedAttribute</code>.
     */
    static validateJSON(data: any): boolean;
    height: any;
    length: any;
    weight: any;
    width: any;
}
