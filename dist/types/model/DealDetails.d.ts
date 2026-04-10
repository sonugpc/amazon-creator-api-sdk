export default DealDetails;
/**
 * The DealDetails model module.
 * @module model/DealDetails
 * @version 1.0.0
 */
declare class DealDetails {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>DealDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealDetails} obj Optional instance to populate.
     * @return {module:model/DealDetails} The populated <code>DealDetails</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>DealDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DealDetails</code>.
     */
    static validateJSON(data: any): boolean;
    accessType: any;
    badge: any;
    earlyAccessDurationInMilliseconds: any;
    endTime: any;
    percentClaimed: any;
    startTime: any;
}
