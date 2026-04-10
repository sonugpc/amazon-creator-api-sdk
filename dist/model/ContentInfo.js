"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Languages = _interopRequireDefault(require("./Languages"));
var _SingleIntegerValuedAttribute = _interopRequireDefault(require("./SingleIntegerValuedAttribute"));
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
 * The ContentInfo model module.
 * @module model/ContentInfo
 * @version 1.0.0
 */
class ContentInfo {
  /**
   * Constructs a new <code>ContentInfo</code>.
   * Container for set of attributes that are specific to the content like books, movies.
   * @alias module:model/ContentInfo
   */
  constructor() {
    ContentInfo.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ContentInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentInfo} obj Optional instance to populate.
   * @return {module:model/ContentInfo} The populated <code>ContentInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ContentInfo();
      if (data.hasOwnProperty('edition')) {
        obj['edition'] = _SingleStringValuedAttribute.default.constructFromObject(data['edition']);
      }
      if (data.hasOwnProperty('languages')) {
        obj['languages'] = _Languages.default.constructFromObject(data['languages']);
      }
      if (data.hasOwnProperty('pagesCount')) {
        obj['pagesCount'] = _SingleIntegerValuedAttribute.default.constructFromObject(data['pagesCount']);
      }
      if (data.hasOwnProperty('publicationDate')) {
        obj['publicationDate'] = _SingleStringValuedAttribute.default.constructFromObject(data['publicationDate']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>ContentInfo</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentInfo</code>.
   */
  static validateJSON(data) {
    // validate the optional field `edition`
    if (data['edition']) {
      // data not null
      _SingleStringValuedAttribute.default.validateJSON(data['edition']);
    }
    // validate the optional field `languages`
    if (data['languages']) {
      // data not null
      _Languages.default.validateJSON(data['languages']);
    }
    // validate the optional field `pagesCount`
    if (data['pagesCount']) {
      // data not null
      _SingleIntegerValuedAttribute.default.validateJSON(data['pagesCount']);
    }
    // validate the optional field `publicationDate`
    if (data['publicationDate']) {
      // data not null
      _SingleStringValuedAttribute.default.validateJSON(data['publicationDate']);
    }
    return true;
  }
}

/**
 * @member {module:model/SingleStringValuedAttribute} edition
 */
ContentInfo.prototype['edition'] = undefined;

/**
 * @member {module:model/Languages} languages
 */
ContentInfo.prototype['languages'] = undefined;

/**
 * @member {module:model/SingleIntegerValuedAttribute} pagesCount
 */
ContentInfo.prototype['pagesCount'] = undefined;

/**
 * @member {module:model/SingleStringValuedAttribute} publicationDate
 */
ContentInfo.prototype['publicationDate'] = undefined;
var _default = exports.default = ContentInfo;