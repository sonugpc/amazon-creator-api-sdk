# amazon-creator-api-sdk Usage Guide

This guide shows installation, initialization, common request patterns, and release steps for the package.

## Install

```bash
npm install amazon-creator-api-sdk
```

## Import

```js
const {
  ApiClient,
  DefaultApi,
  GetItemsRequestContent,
  SearchItemsRequestContent,
  GetBrowseNodesRequestContent,
  GetVariationsRequestContent
} = require('amazon-creator-api-sdk');
```

If your runtime does not support package exports cleanly, import from the built entry:

```js
const sdk = require('amazon-creator-api-sdk/dist/index.js');
```

## Initialize Client

```js
const { ApiClient, DefaultApi } = require('amazon-creator-api-sdk');

const apiClient = new ApiClient();
apiClient.credentialId = process.env.CREATORS_CREDENTIAL_ID;
apiClient.credentialSecret = process.env.CREATORS_CREDENTIAL_SECRET;
apiClient.version = process.env.CREATORS_CREDENTIAL_VERSION; // Example: 3.1

const api = new DefaultApi(apiClient);
```

## Example: GetItems

```js
const {
  ApiClient,
  DefaultApi,
  GetItemsRequestContent
} = require('amazon-creator-api-sdk');

async function runGetItems() {
  const marketplace = 'www.amazon.com';

  const client = new ApiClient();
  client.credentialId = process.env.CREATORS_CREDENTIAL_ID;
  client.credentialSecret = process.env.CREATORS_CREDENTIAL_SECRET;
  client.version = process.env.CREATORS_CREDENTIAL_VERSION;

  const api = new DefaultApi(client);

  const request = new GetItemsRequestContent();
  request.partnerTag = process.env.CREATORS_PARTNER_TAG;
  request.itemIds = ['B0DLFMFBJW'];
  request.resources = [
    'images.primary.medium',
    'itemInfo.title',
    'offersV2.listings.price'
  ];

  const response = await api.getItems(marketplace, request);
  console.log(JSON.stringify(response, null, 2));
}

runGetItems().catch((error) => {
  console.error('GetItems failed:', error.message);
  process.exitCode = 1;
});
```

## Example: SearchItems

```js
const {
  ApiClient,
  DefaultApi,
  SearchItemsRequestContent
} = require('amazon-creator-api-sdk');

async function runSearchItems() {
  const marketplace = 'www.amazon.com';

  const client = new ApiClient();
  client.credentialId = process.env.CREATORS_CREDENTIAL_ID;
  client.credentialSecret = process.env.CREATORS_CREDENTIAL_SECRET;
  client.version = process.env.CREATORS_CREDENTIAL_VERSION;

  const api = new DefaultApi(client);

  const request = new SearchItemsRequestContent();
  request.partnerTag = process.env.CREATORS_PARTNER_TAG;
  request.keywords = 'Harry Potter';
  request.searchIndex = 'Books';
  request.itemCount = 2;
  request.resources = [
    'images.primary.medium',
    'itemInfo.title',
    'offersV2.listings.price'
  ];

  const response = await api.searchItems(marketplace, {
    searchItemsRequestContent: request
  });

  console.log(JSON.stringify(response, null, 2));
}

runSearchItems().catch((error) => {
  console.error('SearchItems failed:', error.message);
  process.exitCode = 1;
});
```

## Credentials and Environment Variables

Set these before running scripts:

- CREATORS_CREDENTIAL_ID
- CREATORS_CREDENTIAL_SECRET
- CREATORS_CREDENTIAL_VERSION
- CREATORS_PARTNER_TAG

Example:

```bash
export CREATORS_CREDENTIAL_ID="your-id"
export CREATORS_CREDENTIAL_SECRET="your-secret"
export CREATORS_CREDENTIAL_VERSION="3.1"
export CREATORS_PARTNER_TAG="yourtag-20"
```

## Run Examples

Examples for all supported operations are in README under the API Examples section.

```bash
npm install
npm run build
```

## Test

Smoke tests validate exports and request validation logic without network calls.

```bash
npm test
```

## Build and Publish

```bash
npm run build
npm pack --dry-run
npm publish --access public
```

Before publish:

- Ensure package version is updated.
- Confirm npm account has publish rights for the package name.
