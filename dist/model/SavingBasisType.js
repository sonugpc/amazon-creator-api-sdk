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
* Enum class SavingBasisType.
* @enum {}
* @readonly
*/
class SavingBasisType {
  /**
   * value: "LIST_PRICE"
   * @const
   */
  "LIST_PRICE" = "LIST_PRICE";

  /**
   * value: "LOWEST_PRICE"
   * @const
   */
  "LOWEST_PRICE" = "LOWEST_PRICE";

  /**
   * value: "LOWEST_PRICE_STRIKETHROUGH"
   * @const
   */
  "LOWEST_PRICE_STRIKETHROUGH" = "LOWEST_PRICE_STRIKETHROUGH";

  /**
   * value: "WAS_PRICE"
   * @const
   */
  "WAS_PRICE" = "WAS_PRICE";

  /**
  * Returns a <code>SavingBasisType</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/SavingBasisType} The enum <code>SavingBasisType</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}
exports.default = SavingBasisType;