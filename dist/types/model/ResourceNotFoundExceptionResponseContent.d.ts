export default ResourceNotFoundExceptionResponseContent;
/**
 * The ResourceNotFoundExceptionResponseContent model module.
 * @module model/ResourceNotFoundExceptionResponseContent
 * @version 1.0.0
 */
declare class ResourceNotFoundExceptionResponseContent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, message: any, resourceId: any, resourceType: any): void;
    /**
     * Constructs a <code>ResourceNotFoundExceptionResponseContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResourceNotFoundExceptionResponseContent} obj Optional instance to populate.
     * @return {module:model/ResourceNotFoundExceptionResponseContent} The populated <code>ResourceNotFoundExceptionResponseContent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ResourceNotFoundExceptionResponseContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResourceNotFoundExceptionResponseContent</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ResourceNotFoundExceptionResponseContent</code>.
     * Request references a resource which does not exist.
     * @alias module:model/ResourceNotFoundExceptionResponseContent
     * @param message {String}
     * @param resourceId {String}
     * @param resourceType {String}
     */
    constructor(message: string, resourceId: string, resourceType: string);
    type: any;
    message: any;
    resourceId: any;
    resourceType: any;
}
declare namespace ResourceNotFoundExceptionResponseContent {
    let RequiredProperties: string[];
}
