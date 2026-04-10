export default ReportMetadata;
/**
 * The ReportMetadata model module.
 * @module model/ReportMetadata
 * @version 1.0.0
 */
declare class ReportMetadata {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, filename: any, md5: any, size: any, lastModified: any): void;
    /**
     * Constructs a <code>ReportMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportMetadata} obj Optional instance to populate.
     * @return {module:model/ReportMetadata} The populated <code>ReportMetadata</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ReportMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportMetadata</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ReportMetadata</code>.
     * @alias module:model/ReportMetadata
     * @param filename {String}
     * @param md5 {String}
     * @param size {Number}
     * @param lastModified {String}
     */
    constructor(filename: string, md5: string, size: number, lastModified: string);
    filename: any;
    md5: any;
    size: any;
    lastModified: any;
}
declare namespace ReportMetadata {
    let RequiredProperties: string[];
}
