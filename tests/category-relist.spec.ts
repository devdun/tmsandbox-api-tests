import { test, expect } from './fixtures/category-api';

test.describe('Category relist', () => {
  test('is enabled', async ({ categoryDetails }) => {
    expect(categoryDetails.CanRelist).toBe(true);
  });
});
