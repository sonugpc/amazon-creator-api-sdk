export default GetFeedResponseContent;
/**
 * The GetFeedResponseContent model module.
 * @module model/GetFeedResponseContent
 * @version 1.0.0
 */
declare class GetFeedResponseContent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, url: any): void;
    /**
     * Constructs a <code>GetFeedResponseContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFeedResponseContent} obj Optional instance to populate.
     * @return {module:model/GetFeedResponseContent} The populated <code>GetFeedResponseContent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GetFeedResponseContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetFeedResponseContent</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GetFeedResponseContent</code>.
     * @alias module:model/GetFeedResponseContent
     * @param url {String}
     */
    constructor(url: string);
    url: any;
}
declare namespace GetFeedResponseContent {
    let RequiredProperties: string[];
}
