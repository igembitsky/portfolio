import { test, expect } from '@playwright/test';

test('homepage loads with hero, flagships, and about', async ({ page }) => {
  await page.goto('/portfolio/');

  await expect(page.locator('h1')).toContainText('I build and scale products');
  await expect(page.locator('nav.site-nav')).toBeVisible();
  await expect(page.locator('#build-scale')).toBeAttached();
  await expect(page.locator('#find-product')).toBeAttached();
  await expect(page.locator('#scale-system')).toBeAttached();
  await expect(page.locator('#build-ai')).toBeAttached();
  await expect(page.locator('#other')).toBeAttached();
  await expect(page.locator('#about')).toBeAttached();

  const linkedin = page.locator('a[href*="linkedin.com/in/gembitsky"]');
  await expect(linkedin.first()).toBeVisible();
});

test('no email address or resume link is exposed', async ({ page }) => {
  await page.goto('/portfolio/');
  const html = await page.content();
  expect(html).not.toMatch(/mailto:/i);
  expect(html).not.toMatch(/[A-Za-z0-9.+-]+@[A-Za-z0-9-]+\.[a-z]{2,}/);
  expect(html).not.toMatch(/resume|\bcv\b/i);
});

test('logo strip renders all seven logos', async ({ page }) => {
  await page.goto('/portfolio/');
  const imgs = page.locator('.logos img');
  await expect(imgs).toHaveCount(7);
  for (const img of await imgs.all()) {
    const w = await img.evaluate((el) => (el as HTMLImageElement).naturalWidth);
    expect(w).toBeGreaterThan(0);
  }
});

test('case study opens as a dialog and closes on Escape', async ({ page }) => {
  await page.goto('/portfolio/');
  await page.locator('[data-open="case-build-scale"]').click();
  const dialog = page.locator('#case-build-scale');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('h2')).toContainText('A case study in building and scaling');
  await expect(dialog.getByText('The company', { exact: true })).toBeVisible();
  await expect(dialog.getByText('Impact', { exact: true })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});

test('nav links scroll to the section', async ({ page }) => {
  await page.goto('/portfolio/');
  await page.click('nav.site-nav a[href="#about"]');
  await expect(page.locator('#about')).toBeInViewport();
});

test('papers dialog opens from About and lists three papers', async ({ page }) => {
  await page.goto('/portfolio/');
  await page.locator('[data-open="case-papers"]').click();
  const dialog = page.locator('#case-papers');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('.papers li')).toHaveCount(3);
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});
