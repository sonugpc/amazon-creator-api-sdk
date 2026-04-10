export default GetReportRequestContent;
/**
 * The GetReportRequestContent model module.
 * @module model/GetReportRequestContent
 * @version 1.0.0
 */
declare class GetReportRequestContent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, filename: any): void;
    /**
     * Constructs a <code>GetReportRequestContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetReportRequestContent} obj Optional instance to populate.
     * @return {module:model/GetReportRequestContent} The populated <code>GetReportRequestContent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GetReportRequestContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetReportRequestContent</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GetReportRequestContent</code>.
     * @alias module:model/GetReportRequestContent
     * @param filename {String}
     */
    constructor(filename: string);
    filename: any;
}
declare namespace GetReportRequestContent {
    let RequiredProperties: string[];
}
