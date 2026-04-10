export default GetBrowseNodesRequestContent;
/**
 * The GetBrowseNodesRequestContent model module.
 * @module model/GetBrowseNodesRequestContent
 * @version 1.0.0
 */
declare class GetBrowseNodesRequestContent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, partnerTag: any, browseNodeIds: any): void;
    /**
     * Constructs a <code>GetBrowseNodesRequestContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBrowseNodesRequestContent} obj Optional instance to populate.
     * @return {module:model/GetBrowseNodesRequestContent} The populated <code>GetBrowseNodesRequestContent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GetBrowseNodesRequestContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetBrowseNodesRequestContent</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GetBrowseNodesRequestContent</code>.
     * Input for the GetBrowseNodes operation to retrieve browse node information.
     * @alias module:model/GetBrowseNodesRequestContent
     * @param partnerTag {String} Unique ID for a partner. Type: String (Non-Empty) Default Value: None Example: 'xyz-20'
     * @param browseNodeIds {Array.<String>} List of BrowseNodeIds. A BrowseNodeId is a unique ID assigned by Amazon that identifies a product category/sub-category. The BrowseNodeId is a positive Long having max value upto Long.MAX_VALUE i.e. 9223372036854775807 (inclusive). Type: List of Strings (Positive Long only) (up to 10) Default Value: None Example: ['283155', '3040']
     */
    constructor(partnerTag: string, browseNodeIds: Array<string>);
    partnerTag: any;
    browseNodeIds: any;
    languagesOfPreference: any;
    resources: any;
}
declare namespace GetBrowseNodesRequestContent {
    let RequiredProperties: string[];
}
