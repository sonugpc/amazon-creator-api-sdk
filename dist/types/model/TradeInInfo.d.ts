export default TradeInInfo;
/**
 * The TradeInInfo model module.
 * @module model/TradeInInfo
 * @version 1.0.0
 */
declare class TradeInInfo {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>TradeInInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TradeInInfo} obj Optional instance to populate.
     * @return {module:model/TradeInInfo} The populated <code>TradeInInfo</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TradeInInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TradeInInfo</code>.
     */
    static validateJSON(data: any): boolean;
    isEligibleForTradeIn: any;
    price: any;
}
