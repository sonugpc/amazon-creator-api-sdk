"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SingleStringValuedAttribute = _interopRequireDefault(require("./SingleStringValuedAttribute"));
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
 * The ManufactureInfo model module.
 * @module model/ManufactureInfo
 * @version 1.0.0
 */
class ManufactureInfo {
  /**
   * Constructs a new <code>ManufactureInfo</code>.
   * Container for set of attributes that specifies manufacturing related information of a product.
   * @alias module:model/ManufactureInfo
   */
  constructor() {
    ManufactureInfo.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ManufactureInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManufactureInfo} obj Optional instance to populate.
   * @return {module:model/ManufactureInfo} The populated <code>ManufactureInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ManufactureInfo();
      if (data.hasOwnProperty('itemPartNumber')) {
        obj['itemPartNumber'] = _SingleStringValuedAttribute.default.constructFromObject(data['itemPartNumber']);
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = _SingleStringValuedAttribute.default.constructFromObject(data['model']);
      }
      if (data.hasOwnProperty('warranty')) {
        obj['warranty'] = _SingleStringValuedAttribute.default.constructFromObject(data['warranty']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>ManufactureInfo</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ManufactureInfo</code>.
   */
  static validateJSON(data) {
    // validate the optional field `itemPartNumber`
    if (data['itemPartNumber']) {
      // data not null
      _SingleStringValuedAttribute.default.validateJSON(data['itemPartNumber']);
    }
    // validate the optional field `model`
    if (data['model']) {
      // data not null
      _SingleStringValuedAttribute.default.validateJSON(data['model']);
    }
    // validate the optional field `warranty`
    if (data['warranty']) {
      // data not null
      _SingleStringValuedAttribute.default.validateJSON(data['warranty']);
    }
    return true;
  }
}

/**
 * @member {module:model/SingleStringValuedAttribute} itemPartNumber
 */
ManufactureInfo.prototype['itemPartNumber'] = undefined;

/**
 * @member {module:model/SingleStringValuedAttribute} model
 */
ManufactureInfo.prototype['model'] = undefined;

/**
 * @member {module:model/SingleStringValuedAttribute} warranty
 */
ManufactureInfo.prototype['warranty'] = undefined;
var _default = exports.default = ManufactureInfo;