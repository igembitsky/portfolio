import { test, expect } from '@playwright/test';

test('homepage loads with key sections', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('h1')).toContainText('Igor Gembitsky');
  await expect(page.locator('nav')).toBeVisible();
  await expect(page.locator('#canary')).toBeAttached();
  await expect(page.locator('#vdb')).toBeAttached();
  await expect(page.locator('#projects')).toBeAttached();
  await expect(page.locator('#contact')).toBeVisible();

  const linkedinLink = page.locator('a[href*="linkedin.com/in/gembitsky"]');
  await expect(linkedinLink.first()).toBeVisible();
});

test('navigation links scroll to sections', async ({ page }) => {
  await page.goto('/');

  await page.click('a[href="#canary"]');
  await expect(page.locator('#canary')).toBeInViewport();
});

test('portfolio cards expand on click', async ({ page }) => {
  await page.goto('/');

  const trigger = page.locator('[data-expand-trigger]').first();
  await trigger.click();

  const panel = page.locator('.card-expand-panel.open').first();
  await expect(panel).toBeVisible();
});
