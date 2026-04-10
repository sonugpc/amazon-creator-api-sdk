export default SearchItemsRequestContent;
/**
 * The SearchItemsRequestContent model module.
 * @module model/SearchItemsRequestContent
 * @version 1.0.0
 */
declare class SearchItemsRequestContent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>SearchItemsRequestContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchItemsRequestContent} obj Optional instance to populate.
     * @return {module:model/SearchItemsRequestContent} The populated <code>SearchItemsRequestContent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SearchItemsRequestContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchItemsRequestContent</code>.
     */
    static validateJSON(data: any): boolean;
    actor: any;
    artist: any;
    author: any;
    availability: any;
    brand: any;
    browseNodeId: any;
    condition: any;
    currencyOfPreference: any;
    deliveryFlags: any;
    itemCount: any;
    itemPage: any;
    keywords: any;
    languagesOfPreference: any;
    maxPrice: any;
    minPrice: any;
    minReviewsRating: any;
    minSavingPercent: any;
    partnerTag: any;
    properties: any;
    resources: any;
    searchIndex: any;
    sortBy: any;
    title: any;
}
