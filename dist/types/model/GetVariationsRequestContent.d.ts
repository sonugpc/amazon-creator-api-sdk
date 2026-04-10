export default GetVariationsRequestContent;
/**
 * The GetVariationsRequestContent model module.
 * @module model/GetVariationsRequestContent
 * @version 1.0.0
 */
declare class GetVariationsRequestContent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, partnerTag: any, asin: any): void;
    /**
     * Constructs a <code>GetVariationsRequestContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetVariationsRequestContent} obj Optional instance to populate.
     * @return {module:model/GetVariationsRequestContent} The populated <code>GetVariationsRequestContent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GetVariationsRequestContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetVariationsRequestContent</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GetVariationsRequestContent</code>.
     * Input for the GetVariations operation to retrieve product variation information.
     * @alias module:model/GetVariationsRequestContent
     * @param partnerTag {String} Unique Id for a partner. This is used to identify the associate tag for tracking affiliate commissions. Example: 'xyz-20'
     * @param asin {String} Amazon Standard Identification Number. This can be either a parent ASIN (to retrieve all variations) or a child ASIN (to retrieve sibling variations). Type: Non-Empty String. Example: 'B0199980K4'
     */
    constructor(partnerTag: string, asin: string);
    partnerTag: any;
    asin: any;
    condition: any;
    currencyOfPreference: any;
    languagesOfPreference: any;
    properties: any;
    resources: any;
    variationCount: any;
    variationPage: any;
}
declare namespace GetVariationsRequestContent {
    let RequiredProperties: string[];
}
