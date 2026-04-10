/**
* Enum class Availability.
* @enum {}
* @readonly
*/
export default class Availability {
    /**
    * Returns a <code>Availability</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Availability} The enum <code>Availability</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Available"
     * @const
     */
    Available: string;
    /**
     * value: "IncludeOutOfStock"
     * @const
     */
    IncludeOutOfStock: string;
}
/**
 * *
 */
export type Availability = any;
