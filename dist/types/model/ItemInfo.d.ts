export default ItemInfo;
/**
 * The ItemInfo model module.
 * @module model/ItemInfo
 * @version 1.0.0
 */
declare class ItemInfo {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ItemInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemInfo} obj Optional instance to populate.
     * @return {module:model/ItemInfo} The populated <code>ItemInfo</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ItemInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ItemInfo</code>.
     */
    static validateJSON(data: any): boolean;
    byLineInfo: any;
    classifications: any;
    contentInfo: any;
    contentRating: any;
    externalIds: any;
    features: any;
    manufactureInfo: any;
    productInfo: any;
    technicalInfo: any;
    title: any;
    tradeInInfo: any;
}
