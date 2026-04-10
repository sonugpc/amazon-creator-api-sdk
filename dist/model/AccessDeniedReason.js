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
* Enum class AccessDeniedReason.
* @enum {}
* @readonly
*/
class AccessDeniedReason {
  /**
   * value: "AssociateNotEligible"
   * @const
   */
  "AssociateNotEligible" = "AssociateNotEligible";

  /**
   * value: "AuthorizationFailed"
   * @const
   */
  "AuthorizationFailed" = "AuthorizationFailed";

  /**
   * value: "Other"
   * @const
   */
  "Other" = "Other";

  /**
  * Returns a <code>AccessDeniedReason</code> enum value from a Javascript object name.
  * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/AccessDeniedReason} The enum <code>AccessDeniedReason</code> value.
  */
  static constructFromObject(object) {
    return object;
  }
}
exports.default = AccessDeniedReason;