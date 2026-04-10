export default GetReportResponseContent;
/**
 * The GetReportResponseContent model module.
 * @module model/GetReportResponseContent
 * @version 1.0.0
 */
declare class GetReportResponseContent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, url: any): void;
    /**
     * Constructs a <code>GetReportResponseContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetReportResponseContent} obj Optional instance to populate.
     * @return {module:model/GetReportResponseContent} The populated <code>GetReportResponseContent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GetReportResponseContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetReportResponseContent</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GetReportResponseContent</code>.
     * @alias module:model/GetReportResponseContent
     * @param url {String}
     */
    constructor(url: string);
    url: any;
}
declare namespace GetReportResponseContent {
    let RequiredProperties: string[];
}
