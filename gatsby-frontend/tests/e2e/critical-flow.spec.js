// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Critical User Flow', () => {
  test('home page loads correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/Home/);
    
    // Check header is visible
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // Check footer is visible
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('navigation works', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation links
    await page.click('a[href="/developers/"]');
    await expect(page).toHaveURL(/.*\/developers/);
    
    await page.click('a[href="/contact/"]');
    await expect(page).toHaveURL(/.*\/contact/);
    
    await page.click('a[href="/"]');
    await expect(page).toHaveURL(/.*\/$/);
  });

  test('footer links work', async ({ page }) => {
    await page.goto('/');
    
    // Test footer links
    await page.click('a[href="/privacy/"]');
    await expect(page).toHaveURL(/.*\/privacy/);
    
    await page.goto('/');
    await page.click('a[href="/terms/"]');
    await expect(page).toHaveURL(/.*\/terms/);
  });

  test('developers page loads', async ({ page }) => {
    await page.goto('/developers');
    
    // Check page loads
    await expect(page).toHaveTitle(/Developers/);
    
    // Check main content is visible
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });
});
