/**
* Enum class OfferType.
* @enum {}
* @readonly
*/
export default class OfferType {
    /**
    * Returns a <code>OfferType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/OfferType} The enum <code>OfferType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "HAUL"
     * @const
     */
    HAUL: string;
    /**
     * value: "SUBSCRIBE_AND_SAVE"
     * @const
     */
    SUBSCRIBE_AND_SAVE: string;
    /**
     * value: "LIGHTNING_DEAL"
     * @const
     */
    LIGHTNING_DEAL: string;
}
/**
 * *
 */
export type OfferType = any;
