export default TechnicalInfo;
/**
 * The TechnicalInfo model module.
 * @module model/TechnicalInfo
 * @version 1.0.0
 */
declare class TechnicalInfo {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>TechnicalInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TechnicalInfo} obj Optional instance to populate.
     * @return {module:model/TechnicalInfo} The populated <code>TechnicalInfo</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TechnicalInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TechnicalInfo</code>.
     */
    static validateJSON(data: any): boolean;
    energyEfficiencyClass: any;
    formats: any;
}
