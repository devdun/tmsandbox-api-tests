import { test as base, expect } from '@playwright/test';

interface Promotion {
  Name: string;
  Description: string;
}

export interface CategoryDetails {
  CategoryId: number;
  Name: string;
  CanRelist: boolean;
  Promotions: Promotion[];
}

export const test = base.extend<{ categoryDetails: CategoryDetails }>({
  categoryDetails: async ({ request }, use) => {
    const response = await request.get('/v1/Categories/6327/Details.json?catalogue=false');
    expect(response.ok(), `API returned ${response.status()}`).toBeTruthy();
    await use(await response.json() as CategoryDetails);
  },
});

export { expect };
