import { test, expect } from '@playwright/test';

test('homepage loads with key sections', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('h1')).toContainText('Igor Gembitsky');
  await expect(page.locator('nav')).toBeVisible();
  await expect(page.locator('#work')).toBeAttached();
  await expect(page.locator('#builds')).toBeAttached();
  await expect(page.locator('#connect')).toBeVisible();

  const linkedinLink = page.locator('a[href*="linkedin.com/in/gembitsky"]');
  await expect(linkedinLink.first()).toBeVisible();
});

test('navigation links scroll to sections', async ({ page }) => {
  await page.goto('/');

  await page.click('a[href="#work"]');
  await expect(page.locator('#work')).toBeInViewport();
});
