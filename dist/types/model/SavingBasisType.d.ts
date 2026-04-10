/**
* Enum class SavingBasisType.
* @enum {}
* @readonly
*/
export default class SavingBasisType {
    /**
    * Returns a <code>SavingBasisType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SavingBasisType} The enum <code>SavingBasisType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "LIST_PRICE"
     * @const
     */
    LIST_PRICE: string;
    /**
     * value: "LOWEST_PRICE"
     * @const
     */
    LOWEST_PRICE: string;
    /**
     * value: "LOWEST_PRICE_STRIKETHROUGH"
     * @const
     */
    LOWEST_PRICE_STRIKETHROUGH: string;
    /**
     * value: "WAS_PRICE"
     * @const
     */
    WAS_PRICE: string;
}
/**
 * *
 */
export type SavingBasisType = any;
