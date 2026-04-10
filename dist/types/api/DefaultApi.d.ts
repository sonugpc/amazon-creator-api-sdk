/**
 * Default service.
 * @module api/DefaultApi
 * @version 1.0.0
 */
export default class DefaultApi {
    /**
     * Constructs a new DefaultApi.
     * @alias module:api/DefaultApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Given a BrowseNodeId, GetBrowseNodes operation returns the specified browse node's information like name, children and ancestors depending on the resources specified in the request. The names and browse node IDs of the children and ancestor browse nodes are also returned. GetBrowseNodes enables you to traverse the browse node hierarchy to find a browse node.  GetBrowseNodes Operation returns Id, DisplayName, ContextFreeName and SalesRank response elements by default. For other response elements associated, with GetBrowseNodes supports the following high-level resources: - BrowseNodes  Available in all locales, however, parameter support varies by locale.
     * @param {String} xMarketplace Target Amazon Locale. Type: String Default Value: None Example: 'www.amazon.com'
     * @param {module:model/GetBrowseNodesRequestContent} getBrowseNodesRequestContent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetBrowseNodesResponseContent} and HTTP response
     */
    getBrowseNodesWithHttpInfo(xMarketplace: string, getBrowseNodesRequestContent: any): Promise<any>;
    /**
     * Given a BrowseNodeId, GetBrowseNodes operation returns the specified browse node's information like name, children and ancestors depending on the resources specified in the request. The names and browse node IDs of the children and ancestor browse nodes are also returned. GetBrowseNodes enables you to traverse the browse node hierarchy to find a browse node.  GetBrowseNodes Operation returns Id, DisplayName, ContextFreeName and SalesRank response elements by default. For other response elements associated, with GetBrowseNodes supports the following high-level resources: - BrowseNodes  Available in all locales, however, parameter support varies by locale.
     * @param {String} xMarketplace Target Amazon Locale. Type: String Default Value: None Example: 'www.amazon.com'
     * @param {module:model/GetBrowseNodesRequestContent} getBrowseNodesRequestContent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetBrowseNodesResponseContent}
     */
    getBrowseNodes(xMarketplace: string, getBrowseNodesRequestContent: any): Promise<any>;
    /**
     * Get pre-signed S3 Url for a feed
     * @param {String} xMarketplace Target Amazon Locale.
     * @param {module:model/GetFeedRequestContent} getFeedRequestContent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetFeedResponseContent} and HTTP response
     */
    getFeedWithHttpInfo(xMarketplace: string, getFeedRequestContent: any): Promise<any>;
    /**
     * Get pre-signed S3 Url for a feed
     * @param {String} xMarketplace Target Amazon Locale.
     * @param {module:model/GetFeedRequestContent} getFeedRequestContent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetFeedResponseContent}
     */
    getFeed(xMarketplace: string, getFeedRequestContent: any): Promise<any>;
    /**
     * @param {String} xMarketplace Target Amazon Locale.
     * @param {module:model/GetItemsRequestContent} getItemsRequestContent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetItemsResponseContent} and HTTP response
     */
    getItemsWithHttpInfo(xMarketplace: string, getItemsRequestContent: any): Promise<any>;
    /**
     * @param {String} xMarketplace Target Amazon Locale.
     * @param {module:model/GetItemsRequestContent} getItemsRequestContent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetItemsResponseContent}
     */
    getItems(xMarketplace: string, getItemsRequestContent: any): Promise<any>;
    /**
     * Get pre-signed S3 Url for a report
     * @param {String} xMarketplace Target Amazon Locale.
     * @param {module:model/GetReportRequestContent} getReportRequestContent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetReportResponseContent} and HTTP response
     */
    getReportWithHttpInfo(xMarketplace: string, getReportRequestContent: any): Promise<any>;
    /**
     * Get pre-signed S3 Url for a report
     * @param {String} xMarketplace Target Amazon Locale.
     * @param {module:model/GetReportRequestContent} getReportRequestContent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetReportResponseContent}
     */
    getReport(xMarketplace: string, getReportRequestContent: any): Promise<any>;
    /**
     * Given an ASIN, the GetVariations operation returns a set of items that are the same product, but differ according to a consistent theme, for example size and color. These items which differ according to a consistent theme are called variations. A variation is a child ASIN. The parent ASIN is an abstraction of the children items. For example, a shirt is a parent ASIN and parent ASINs cannot be sold. A child ASIN would be a blue shirt, size 16, sold by MyApparelStore. This child ASIN is one of potentially many variations. The ways in which variations differ are called dimensions. In the preceding example, size and color are the dimensions.  GetVariations supports the following high-level resources: - BrowseNodeInfo: Browse nodes associated with items - Images: Product images in various sizes - ItemInfo: Detailed item information including title, features, and specifications - OffersV2: Offer listings with availability, pricing, and merchant details - VariationSummary: Summary of variation dimensions and price ranges  By default, GetVariations returns 10 variations per page. Use VariationPage and VariationCount parameters to control pagination. The operation works with both parent ASINs (to retrieve all variations) and child ASINs (to retrieve sibling variations).  Available in all locales, however, parameter support varies by locale.
     * @param {String} xMarketplace Target Amazon Locale. This specifies the marketplace where the items should be searched. Example: 'www.amazon.com'
     * @param {module:model/GetVariationsRequestContent} getVariationsRequestContent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetVariationsResponseContent} and HTTP response
     */
    getVariationsWithHttpInfo(xMarketplace: string, getVariationsRequestContent: any): Promise<any>;
    /**
     * Given an ASIN, the GetVariations operation returns a set of items that are the same product, but differ according to a consistent theme, for example size and color. These items which differ according to a consistent theme are called variations. A variation is a child ASIN. The parent ASIN is an abstraction of the children items. For example, a shirt is a parent ASIN and parent ASINs cannot be sold. A child ASIN would be a blue shirt, size 16, sold by MyApparelStore. This child ASIN is one of potentially many variations. The ways in which variations differ are called dimensions. In the preceding example, size and color are the dimensions.  GetVariations supports the following high-level resources: - BrowseNodeInfo: Browse nodes associated with items - Images: Product images in various sizes - ItemInfo: Detailed item information including title, features, and specifications - OffersV2: Offer listings with availability, pricing, and merchant details - VariationSummary: Summary of variation dimensions and price ranges  By default, GetVariations returns 10 variations per page. Use VariationPage and VariationCount parameters to control pagination. The operation works with both parent ASINs (to retrieve all variations) and child ASINs (to retrieve sibling variations).  Available in all locales, however, parameter support varies by locale.
     * @param {String} xMarketplace Target Amazon Locale. This specifies the marketplace where the items should be searched. Example: 'www.amazon.com'
     * @param {module:model/GetVariationsRequestContent} getVariationsRequestContent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetVariationsResponseContent}
     */
    getVariations(xMarketplace: string, getVariationsRequestContent: any): Promise<any>;
    /**
     * Lists all Feeds
     * @param {String} xMarketplace Target Amazon Locale.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListFeedsResponseContent} and HTTP response
     */
    listFeedsWithHttpInfo(xMarketplace: string): Promise<any>;
    /**
     * Lists all Feeds
     * @param {String} xMarketplace Target Amazon Locale.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListFeedsResponseContent}
     */
    listFeeds(xMarketplace: string): Promise<any>;
    /**
     * Lists all available reports.
     * @param {String} xMarketplace Target Amazon Locale.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListReportsResponseContent} and HTTP response
     */
    listReportsWithHttpInfo(xMarketplace: string): Promise<any>;
    /**
     * Lists all available reports.
     * @param {String} xMarketplace Target Amazon Locale.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListReportsResponseContent}
     */
    listReports(xMarketplace: string): Promise<any>;
    /**
     * @param {String} xMarketplace Target Amazon Locale.
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchItemsRequestContent} [searchItemsRequestContent]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchItemsResponseContent} and HTTP response
     */
    searchItemsWithHttpInfo(xMarketplace: string, opts: any): Promise<any>;
    /**
     * @param {String} xMarketplace Target Amazon Locale.
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchItemsRequestContent} opts.searchItemsRequestContent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchItemsResponseContent}
     */
    searchItems(xMarketplace: string, opts: {
        searchItemsRequestContent: any;
    }): Promise<any>;
}
