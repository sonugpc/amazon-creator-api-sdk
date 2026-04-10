/*
 * Basic smoke tests for package entry points and key API classes.
 * These tests avoid live network calls and validate local SDK wiring.
 */

const assert = require('assert');
const sdk = require('../dist/index.js');

function testExports() {
  assert.ok(sdk.ApiClient, 'ApiClient export should exist');
  assert.ok(sdk.DefaultApi, 'DefaultApi export should exist');
  assert.ok(sdk.GetItemsRequestContent, 'GetItemsRequestContent export should exist');
  assert.ok(sdk.SearchItemsRequestContent, 'SearchItemsRequestContent export should exist');
}

function testApiClientConfiguration() {
  const client = new sdk.ApiClient('https://creatorsapi.amazon/');

  assert.strictEqual(client.basePath, 'https://creatorsapi.amazon');
  assert.strictEqual(typeof client.setCredentialId, 'function');
  assert.strictEqual(typeof client.setCredentialSecret, 'function');
  assert.strictEqual(typeof client.setVersion, 'function');
  assert.strictEqual(typeof client.callApi, 'function');

  client.setCredentialId('id-123');
  client.setCredentialSecret('secret-123');
  client.setVersion('3.1');

  assert.strictEqual(client.getCredentialId(), 'id-123');
  assert.strictEqual(client.getCredentialSecret(), 'secret-123');
  assert.strictEqual(client.getVersion(), '3.1');
}

function testDefaultApiValidation() {
  const client = new sdk.ApiClient();
  const api = new sdk.DefaultApi(client);

  assert.throws(() => {
    api.getItemsWithHttpInfo(undefined, {});
  }, /Missing the required parameter 'xMarketplace'/);

  assert.throws(() => {
    api.getItemsWithHttpInfo('www.amazon.com', undefined);
  }, /Missing the required parameter 'getItemsRequestContent'/);
}

function run() {
  testExports();
  testApiClientConfiguration();
  testDefaultApiValidation();
  console.log('Smoke tests passed.');
}

run();
