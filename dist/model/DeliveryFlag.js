"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
* Enum class DeliveryFlag.
* @enum {}
* @readonly
*/
class DeliveryFlag {
  /**
   * value: "AmazonGlobal"
   * @const
   */
  "AmazonGlobal" = "AmazonGlobal";

  /**
   * value: "FreeShipping"
   * @const
   */
  "FreeShipping" = "FreeShipping";

  /**
   * value: "FulfilledByAmazon"
   * @const
   */
  "FulfilledByAmazon" = "FulfilledByAmazon";

  /**
   * value: "Prime"
   * @const
   */
  "Prime" = "Prime";

  /**
  * Returns a <code>DeliveryFlag</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/DeliveryFlag} The enum <code>DeliveryFlag</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}
exports.default = DeliveryFlag;