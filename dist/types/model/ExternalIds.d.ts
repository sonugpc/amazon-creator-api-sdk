export default ExternalIds;
/**
 * The ExternalIds model module.
 * @module model/ExternalIds
 * @version 1.0.0
 */
declare class ExternalIds {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ExternalIds</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalIds} obj Optional instance to populate.
     * @return {module:model/ExternalIds} The populated <code>ExternalIds</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalIds</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalIds</code>.
     */
    static validateJSON(data: any): boolean;
    eans: any;
    isbns: any;
    upcs: any;
}
