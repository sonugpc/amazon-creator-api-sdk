export default Feed;
/**
 * The Feed model module.
 * @module model/Feed
 * @version 1.0.0
 */
declare class Feed {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, feedName: any, size: any, md5: any, lastUpdated: any): void;
    /**
     * Constructs a <code>Feed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Feed} obj Optional instance to populate.
     * @return {module:model/Feed} The populated <code>Feed</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Feed</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Feed</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>Feed</code>.
     * @alias module:model/Feed
     * @param feedName {String}
     * @param size {Number}
     * @param md5 {String}
     * @param lastUpdated {String}
     */
    constructor(feedName: string, size: number, md5: string, lastUpdated: string);
    feedName: any;
    size: any;
    md5: any;
    lastUpdated: any;
}
declare namespace Feed {
    let RequiredProperties: string[];
}
