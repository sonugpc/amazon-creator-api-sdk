export default GetFeedRequestContent;
/**
 * The GetFeedRequestContent model module.
 * @module model/GetFeedRequestContent
 * @version 1.0.0
 */
declare class GetFeedRequestContent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, feedName: any): void;
    /**
     * Constructs a <code>GetFeedRequestContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFeedRequestContent} obj Optional instance to populate.
     * @return {module:model/GetFeedRequestContent} The populated <code>GetFeedRequestContent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GetFeedRequestContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetFeedRequestContent</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GetFeedRequestContent</code>.
     * @alias module:model/GetFeedRequestContent
     * @param feedName {String}
     */
    constructor(feedName: string);
    feedName: any;
}
declare namespace GetFeedRequestContent {
    let RequiredProperties: string[];
}
