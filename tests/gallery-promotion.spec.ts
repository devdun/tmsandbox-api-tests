import { test, expect } from './fixtures/category-api';

test.describe('Gallery promotion', () => {
  test('description contains "Good position in category"', async ({ categoryDetails }) => {
    const gallery = categoryDetails.Promotions.find((p) => p.Name === 'Gallery');
    expect(gallery, 'Gallery promotion not found in Promotions array').toBeDefined();
    expect(gallery!.Description).toContain('Good position in category');
  });
});
