"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Rating = _interopRequireDefault(require("./Rating"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Copyright 2025 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

/**
 * The CustomerReviews model module.
 * @module model/CustomerReviews
 * @version 1.0.0
 */
class CustomerReviews {
  /**
   * Constructs a new <code>CustomerReviews</code>.
   * Container for customer reviews information associated with a product. Includes weighted star rating and total reviews count.
   * @alias module:model/CustomerReviews
   */
  constructor() {
    CustomerReviews.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>CustomerReviews</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerReviews} obj Optional instance to populate.
   * @return {module:model/CustomerReviews} The populated <code>CustomerReviews</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CustomerReviews();
      if (data.hasOwnProperty('count')) {
        obj['count'] = _ApiClient.default.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('starRating')) {
        obj['starRating'] = _Rating.default.constructFromObject(data['starRating']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>CustomerReviews</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomerReviews</code>.
   */
  static validateJSON(data) {
    // validate the optional field `starRating`
    if (data['starRating']) {
      // data not null
      _Rating.default.validateJSON(data['starRating']);
    }
    return true;
  }
}

/**
 * @member {Number} count
 */
CustomerReviews.prototype['count'] = undefined;

/**
 * @member {module:model/Rating} starRating
 */
CustomerReviews.prototype['starRating'] = undefined;
var _default = exports.default = CustomerReviews;