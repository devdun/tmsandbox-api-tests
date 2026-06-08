import { test, expect } from './fixtures/category-api';

test.describe('Category name', () => {
  test('is "Carbon credits"', async ({ categoryDetails }) => {
    expect(categoryDetails.Name).toBe('Carbon credits');
  });
});
