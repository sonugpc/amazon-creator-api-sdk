/**
* Enum class DeliveryFlag.
* @enum {}
* @readonly
*/
export default class DeliveryFlag {
    /**
    * Returns a <code>DeliveryFlag</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DeliveryFlag} The enum <code>DeliveryFlag</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "AmazonGlobal"
     * @const
     */
    AmazonGlobal: string;
    /**
     * value: "FreeShipping"
     * @const
     */
    FreeShipping: string;
    /**
     * value: "FulfilledByAmazon"
     * @const
     */
    FulfilledByAmazon: string;
    /**
     * value: "Prime"
     * @const
     */
    Prime: string;
}
/**
 * *
 */
export type DeliveryFlag = any;
