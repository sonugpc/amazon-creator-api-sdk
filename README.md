# Amazon Creator API SDK for Node.js

[![npm version](https://img.shields.io/npm/v/amazon-creator-api-sdk.svg)](https://www.npmjs.com/package/amazon-creator-api-sdk)
[![npm downloads](https://img.shields.io/npm/dm/amazon-creator-api-sdk.svg)](https://www.npmjs.com/package/amazon-creator-api-sdk)
[![npm license](https://img.shields.io/npm/l/amazon-creator-api-sdk.svg)](./LICENSE.txt)
[![CI](https://github.com/sonugpc/amazon-creator-api-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/sonugpc/amazon-creator-api-sdk/actions/workflows/ci.yml)
[![Release](https://github.com/sonugpc/amazon-creator-api-sdk/actions/workflows/release.yml/badge.svg)](https://github.com/sonugpc/amazon-creator-api-sdk/actions/workflows/release.yml)
[![semantic-release](https://img.shields.io/badge/semantic--release-automated-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

Amazon Creator API SDK for Node.js.

Amazon Creator API is the replacement for the Amazon Product Advertising API. This SDK helps you authenticate and call Creator API endpoints such as item lookup, search, browse nodes, reports, and feeds.

## Why This Package

- Official-style SDK interface for Creator API resources
- Ready for Node.js applications and server-side integrations
- Publish-ready npm package with automated release workflow
- Automatic versioning and CHANGELOG generation

## Installation

```bash
npm install amazon-creator-api-sdk
```

## Quick Start

```js
const {
  ApiClient,
  DefaultApi,
  GetItemsRequestContent,
} = require("amazon-creator-api-sdk");

async function run() {
  const apiClient = new ApiClient();
  apiClient.credentialId = process.env.CREATORS_CREDENTIAL_ID;
  apiClient.credentialSecret = process.env.CREATORS_CREDENTIAL_SECRET;
  apiClient.version = process.env.CREATORS_CREDENTIAL_VERSION;

  const api = new DefaultApi(apiClient);

  const request = new GetItemsRequestContent();
  request.partnerTag = process.env.CREATORS_PARTNER_TAG;
  request.itemIds = ["B0DLFMFBJW"];
  request.resources = [
    "itemInfo.title",
    "images.primary.medium",
    "offersV2.listings.price",
  ];

  const response = await api.getItems("www.amazon.com", request);
  console.log(JSON.stringify(response, null, 2));
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

## Usage Documentation

- Full guide: [USAGE.md](USAGE.md)

## API Examples

Use this shared bootstrap in all examples:

```js
const {
  ApiClient,
  DefaultApi,
  GetItemsRequestContent,
  SearchItemsRequestContent,
  GetBrowseNodesRequestContent,
  GetVariationsRequestContent,
  GetFeedRequestContent,
  GetReportRequestContent,
} = require("amazon-creator-api-sdk");

const marketplace = process.env.CREATORS_MARKETPLACE || "www.amazon.com";

const client = new ApiClient();
client.credentialId = process.env.CREATORS_CREDENTIAL_ID;
client.credentialSecret = process.env.CREATORS_CREDENTIAL_SECRET;
client.version = process.env.CREATORS_CREDENTIAL_VERSION;

const api = new DefaultApi(client);
```

### GetItems

```js
const req = new GetItemsRequestContent();
req.partnerTag = process.env.CREATORS_PARTNER_TAG;
req.itemIds = ["B0DLFMFBJW", "B0BFC7WQ6R"];
req.resources = [
  "images.primary.medium",
  "itemInfo.title",
  "offersV2.listings.price",
];

const data = await api.getItems(marketplace, req);
console.log(JSON.stringify(data, null, 2));
```

### SearchItems

```js
const req = new SearchItemsRequestContent();
req.partnerTag = process.env.CREATORS_PARTNER_TAG;
req.keywords = "Harry Potter";
req.searchIndex = "Books";
req.itemCount = 2;
req.resources = [
  "images.primary.medium",
  "itemInfo.title",
  "offersV2.listings.price",
];

const data = await api.searchItems(marketplace, {
  searchItemsRequestContent: req,
});
console.log(JSON.stringify(data, null, 2));
```

### GetBrowseNodes

```js
const req = new GetBrowseNodesRequestContent();
req.partnerTag = process.env.CREATORS_PARTNER_TAG;
req.browseNodeIds = ["3040", "1", "3045"];
req.resources = ["browseNodes.ancestor", "browseNodes.children"];

const data = await api.getBrowseNodes(marketplace, req);
console.log(JSON.stringify(data, null, 2));
```

### GetVariations

```js
const req = new GetVariationsRequestContent();
req.partnerTag = process.env.CREATORS_PARTNER_TAG;
req.asin = "B0DLFMFBJW";
req.resources = [
  "images.primary.medium",
  "itemInfo.title",
  "offersV2.listings.price",
  "variationSummary.variationDimension",
];

const data = await api.getVariations(marketplace, req);
console.log(JSON.stringify(data, null, 2));
```

### ListFeeds and GetFeed

```js
const feeds = await api.listFeeds(marketplace);
console.log(JSON.stringify(feeds, null, 2));

const feedReq = new GetFeedRequestContent();
feedReq.feedName = "<FEED_NAME_FROM_LIST_FEEDS>";
const feed = await api.getFeed(marketplace, feedReq);
console.log(JSON.stringify(feed, null, 2));
```

### ListReports and GetReport

```js
const reports = await api.listReports(marketplace);
console.log(JSON.stringify(reports, null, 2));

const reportReq = new GetReportRequestContent();
reportReq.filename = "<REPORT_FILENAME_FROM_LIST_REPORTS>";
const report = await api.getReport(marketplace, reportReq);
console.log(JSON.stringify(report, null, 2));
```

## Supported Runtime

- Node.js >= 18

## TypeScript and IntelliSense

This package ships generated declaration files in `dist/types`, so VS Code can provide
autocomplete, method signatures, and inline type help when importing from `amazon-creator-api-sdk`.

## Development

```bash
npm install
npm test
npm run build
```

### Commit Message Convention

Use Conventional Commits so semantic-release can infer versions:

- feat: adds a new feature -> minor version bump
- fix: bug fix -> patch version bump
- feat!: or BREAKING CHANGE -> major version bump
- docs:, chore:, test:, refactor: -> usually no release unless configured otherwise

Example:

```text
feat: add getBrowseNodes pagination helper
fix: correct x-marketplace header serialization
```

Manual publish is optional because release workflow handles publishing on master pushes.

## License

Apache-2.0. See [LICENSE.txt](LICENSE.txt).
