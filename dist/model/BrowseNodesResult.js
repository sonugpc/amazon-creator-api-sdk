"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BrowseNode = _interopRequireDefault(require("./BrowseNode"));
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
 * The BrowseNodesResult model module.
 * @module model/BrowseNodesResult
 * @version 1.0.0
 */
class BrowseNodesResult {
  /**
   * Constructs a new <code>BrowseNodesResult</code>.
   * The container for BrowseNodes response. It consists of resultant BrowseNodes for the GetBrowseNodes request.
   * @alias module:model/BrowseNodesResult
   */
  constructor() {
    BrowseNodesResult.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>BrowseNodesResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrowseNodesResult} obj Optional instance to populate.
   * @return {module:model/BrowseNodesResult} The populated <code>BrowseNodesResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrowseNodesResult();
      if (data.hasOwnProperty('browseNodes')) {
        obj['browseNodes'] = _ApiClient.default.convertToType(data['browseNodes'], [_BrowseNode.default]);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>BrowseNodesResult</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BrowseNodesResult</code>.
   */
  static validateJSON(data) {
    if (data['browseNodes']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['browseNodes'])) {
        throw new Error("Expected the field `browseNodes` to be an array in the JSON data but got " + data['browseNodes']);
      }
      // validate the optional field `browseNodes` (array)
      for (const item of data['browseNodes']) {
        _BrowseNode.default.validateJSON(item);
      }
      ;
    }
    return true;
  }
}

/**
 * Container for BrowseNode information which includes BrowseNodeId, Name, Ancestor, Children, SalesRank associated, etc.
 * @member {Array.<module:model/BrowseNode>} browseNodes
 */
BrowseNodesResult.prototype['browseNodes'] = undefined;
var _default = exports.default = BrowseNodesResult;