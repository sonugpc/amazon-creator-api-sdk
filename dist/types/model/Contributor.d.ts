export default Contributor;
/**
 * The Contributor model module.
 * @module model/Contributor
 * @version 1.0.0
 */
declare class Contributor {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Contributor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contributor} obj Optional instance to populate.
     * @return {module:model/Contributor} The populated <code>Contributor</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Contributor</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Contributor</code>.
     */
    static validateJSON(data: any): boolean;
    locale: any;
    name: any;
    role: any;
    roleType: any;
}
