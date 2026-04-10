export default GetItemsRequestContent;
/**
 * The GetItemsRequestContent model module.
 * @module model/GetItemsRequestContent
 * @version 1.0.0
 */
declare class GetItemsRequestContent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, partnerTag: any, itemIds: any): void;
    /**
     * Constructs a <code>GetItemsRequestContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetItemsRequestContent} obj Optional instance to populate.
     * @return {module:model/GetItemsRequestContent} The populated <code>GetItemsRequestContent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GetItemsRequestContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetItemsRequestContent</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GetItemsRequestContent</code>.
     * @alias module:model/GetItemsRequestContent
     * @param partnerTag {String} An alphanumeric token that uniquely identifies a partner. If the value of PartnerType is Associates, enter your Store Id or tracking ID.
     * @param itemIds {Array.<String>}
     */
    constructor(partnerTag: string, itemIds: Array<string>);
    partnerTag: any;
    itemIds: any;
    condition: any;
    currencyOfPreference: any;
    languagesOfPreference: any;
    properties: any;
    resources: any;
}
declare namespace GetItemsRequestContent {
    let RequiredProperties: string[];
}
