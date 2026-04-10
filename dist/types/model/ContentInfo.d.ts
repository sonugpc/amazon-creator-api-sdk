export default ContentInfo;
/**
 * The ContentInfo model module.
 * @module model/ContentInfo
 * @version 1.0.0
 */
declare class ContentInfo {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ContentInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentInfo} obj Optional instance to populate.
     * @return {module:model/ContentInfo} The populated <code>ContentInfo</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ContentInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentInfo</code>.
     */
    static validateJSON(data: any): boolean;
    edition: any;
    languages: any;
    pagesCount: any;
    publicationDate: any;
}
