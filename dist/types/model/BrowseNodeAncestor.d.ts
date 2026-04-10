export default BrowseNodeAncestor;
/**
 * The BrowseNodeAncestor model module.
 * @module model/BrowseNodeAncestor
 * @version 1.0.0
 */
declare class BrowseNodeAncestor {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>BrowseNodeAncestor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BrowseNodeAncestor} obj Optional instance to populate.
     * @return {module:model/BrowseNodeAncestor} The populated <code>BrowseNodeAncestor</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>BrowseNodeAncestor</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BrowseNodeAncestor</code>.
     */
    static validateJSON(data: any): boolean;
    ancestor: any;
    contextFreeName: any;
    displayName: any;
    id: any;
}
