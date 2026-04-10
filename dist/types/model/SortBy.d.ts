/**
* Enum class SortBy.
* @enum {}
* @readonly
*/
export default class SortBy {
    /**
    * Returns a <code>SortBy</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SortBy} The enum <code>SortBy</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "AvgCustomerReviews"
     * @const
     */
    AvgCustomerReviews: string;
    /**
     * value: "Featured"
     * @const
     */
    Featured: string;
    /**
     * value: "NewestArrivals"
     * @const
     */
    NewestArrivals: string;
    /**
     * value: "Price:HighToLow"
     * @const
     */
    "Price:HighToLow": string;
    /**
     * value: "Price:LowToHigh"
     * @const
     */
    "Price:LowToHigh": string;
    /**
     * value: "Relevance"
     * @const
     */
    Relevance: string;
}
/**
 * *
 */
export type SortBy = any;
