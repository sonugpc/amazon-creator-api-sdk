export default OfferLoyaltyPointsV2;
/**
 * The OfferLoyaltyPointsV2 model module.
 * @module model/OfferLoyaltyPointsV2
 * @version 1.0.0
 */
declare class OfferLoyaltyPointsV2 {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>OfferLoyaltyPointsV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OfferLoyaltyPointsV2} obj Optional instance to populate.
     * @return {module:model/OfferLoyaltyPointsV2} The populated <code>OfferLoyaltyPointsV2</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>OfferLoyaltyPointsV2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OfferLoyaltyPointsV2</code>.
     */
    static validateJSON(data: any): boolean;
    points: any;
}
