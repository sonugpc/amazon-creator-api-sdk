"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Money = _interopRequireDefault(require("./Money"));
var _OfferSavingBasis = _interopRequireDefault(require("./OfferSavingBasis"));
var _OfferSavings = _interopRequireDefault(require("./OfferSavings"));
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
 * The OfferPriceV2 model module.
 * @module model/OfferPriceV2
 * @version 1.0.0
 */
class OfferPriceV2 {
  /**
   * Constructs a new <code>OfferPriceV2</code>.
   * Specifies buying price of an offer.
   * @alias module:model/OfferPriceV2
   */
  constructor() {
    OfferPriceV2.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>OfferPriceV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferPriceV2} obj Optional instance to populate.
   * @return {module:model/OfferPriceV2} The populated <code>OfferPriceV2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OfferPriceV2();
      if (data.hasOwnProperty('money')) {
        obj['money'] = _Money.default.constructFromObject(data['money']);
      }
      if (data.hasOwnProperty('pricePerUnit')) {
        obj['pricePerUnit'] = _Money.default.constructFromObject(data['pricePerUnit']);
      }
      if (data.hasOwnProperty('savings')) {
        obj['savings'] = _OfferSavings.default.constructFromObject(data['savings']);
      }
      if (data.hasOwnProperty('savingBasis')) {
        obj['savingBasis'] = _OfferSavingBasis.default.constructFromObject(data['savingBasis']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>OfferPriceV2</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OfferPriceV2</code>.
   */
  static validateJSON(data) {
    // validate the optional field `money`
    if (data['money']) {
      // data not null
      _Money.default.validateJSON(data['money']);
    }
    // validate the optional field `pricePerUnit`
    if (data['pricePerUnit']) {
      // data not null
      _Money.default.validateJSON(data['pricePerUnit']);
    }
    // validate the optional field `savings`
    if (data['savings']) {
      // data not null
      _OfferSavings.default.validateJSON(data['savings']);
    }
    // validate the optional field `savingBasis`
    if (data['savingBasis']) {
      // data not null
      _OfferSavingBasis.default.validateJSON(data['savingBasis']);
    }
    return true;
  }
}

/**
 * @member {module:model/Money} money
 */
OfferPriceV2.prototype['money'] = undefined;

/**
 * @member {module:model/Money} pricePerUnit
 */
OfferPriceV2.prototype['pricePerUnit'] = undefined;

/**
 * @member {module:model/OfferSavings} savings
 */
OfferPriceV2.prototype['savings'] = undefined;

/**
 * @member {module:model/OfferSavingBasis} savingBasis
 */
OfferPriceV2.prototype['savingBasis'] = undefined;
var _default = exports.default = OfferPriceV2;