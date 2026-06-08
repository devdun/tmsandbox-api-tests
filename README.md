# Category API Tests

Acceptance tests for the category details endpoint, built with TypeScript and [Playwright](https://playwright.dev/).

## What is tested

| Acceptance criterion | Spec file |
|---|---|
| `Name` equals `"Carbon credits"` | `tests/category-name.spec.ts` |
| `CanRelist` is `true` | `tests/category-relist.spec.ts` |
| The `Gallery` promotion `Description` contains `"Good position in category"` | `tests/gallery-promotion.spec.ts` |

**Endpoint:**
```
GET https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false
```

## Prerequisites

- Node.js 18 or later

## Setup

```bash
npm install
```

## Running the tests

```bash
npm test
```

To open the HTML report after a run:

```bash
npm run report
```

## Project structure

```
tests/
  fixtures/
    category-api.ts
  category-name.spec.ts
  category-relist.spec.ts
  gallery-promotion.spec.ts
playwright.config.ts
```
