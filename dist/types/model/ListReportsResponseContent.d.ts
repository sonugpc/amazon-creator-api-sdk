export default ListReportsResponseContent;
/**
 * The ListReportsResponseContent model module.
 * @module model/ListReportsResponseContent
 * @version 1.0.0
 */
declare class ListReportsResponseContent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, reports: any): void;
    /**
     * Constructs a <code>ListReportsResponseContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListReportsResponseContent} obj Optional instance to populate.
     * @return {module:model/ListReportsResponseContent} The populated <code>ListReportsResponseContent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ListReportsResponseContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListReportsResponseContent</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ListReportsResponseContent</code>.
     * @alias module:model/ListReportsResponseContent
     * @param reports {Array.<module:model/ReportMetadata>}
     */
    constructor(reports: Array<module>);
    reports: any;
}
declare namespace ListReportsResponseContent {
    let RequiredProperties: string[];
}
