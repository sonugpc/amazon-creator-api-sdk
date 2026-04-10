"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Item = _interopRequireDefault(require("./Item"));
var _VariationSummary = _interopRequireDefault(require("./VariationSummary"));
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
 * The VariationsResult model module.
 * @module model/VariationsResult
 * @version 1.0.0
 */
class VariationsResult {
  /**
   * Constructs a new <code>VariationsResult</code>.
   * The container for Variations response. It consists of items and variation summary. Items contains the list of product variations with their attributes (e.g., different colors, sizes). VariationSummary provides metadata about the complete set of variations including pagination info, price range, and the dimensions along which products vary.
   * @alias module:model/VariationsResult
   */
  constructor() {
    VariationsResult.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>VariationsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariationsResult} obj Optional instance to populate.
   * @return {module:model/VariationsResult} The populated <code>VariationsResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VariationsResult();
      if (data.hasOwnProperty('items')) {
        obj['items'] = _ApiClient.default.convertToType(data['items'], [_Item.default]);
      }
      if (data.hasOwnProperty('variationSummary')) {
        obj['variationSummary'] = _VariationSummary.default.constructFromObject(data['variationSummary']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>VariationsResult</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VariationsResult</code>.
   */
  static validateJSON(data) {
    if (data['items']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['items'])) {
        throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
      }
      // validate the optional field `items` (array)
      for (const item of data['items']) {
        _Item.default.validateJSON(item);
      }
      ;
    }
    // validate the optional field `variationSummary`
    if (data['variationSummary']) {
      // data not null
      _VariationSummary.default.validateJSON(data['variationSummary']);
    }
    return true;
  }
}

/**
 * List of Item which is a container for item information.
 * @member {Array.<module:model/Item>} items
 */
VariationsResult.prototype['items'] = undefined;

/**
 * @member {module:model/VariationSummary} variationSummary
 */
VariationsResult.prototype['variationSummary'] = undefined;
var _default = exports.default = VariationsResult;