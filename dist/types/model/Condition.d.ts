/**
* Enum class Condition.
* @enum {}
* @readonly
*/
export default class Condition {
    /**
    * Returns a <code>Condition</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Condition} The enum <code>Condition</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Any"
     * @const
     */
    Any: string;
    /**
     * value: "New"
     * @const
     */
    New: string;
}
/**
 * *
 */
export type Condition = any;
