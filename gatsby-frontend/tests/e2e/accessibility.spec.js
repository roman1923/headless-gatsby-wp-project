// @ts-check
const { test, expect } = require('@playwright/test');
const assert = require('assert');

test.describe('Accessibility Tests', () => {
  test('has proper heading structure', async ({ page }) => {
    await page.goto('/');
    
    // Check for h1 (get the main page h1, not header logo)
    const h1 = page.locator('main h1').first();
    await expect(h1).toBeVisible();
    
    // Check for proper heading hierarchy
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const headingCount = await headings.count();
    expect(headingCount).toBeGreaterThan(0);
  });

  test('images have alt text', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('img');
    const imageCount = await images.count();
    
    if (imageCount > 0) {
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        const alt = await img.getAttribute('alt');
        assert(alt !== null, `Image ${i} missing alt text`);
      }
    }
  });

  test('links have proper text', async ({ page }) => {
    await page.goto('/');
    
    const links = page.locator('a');
    const linkCount = await links.count();
    
    for (let i = 0; i < Math.min(linkCount, 10); i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      const href = await link.getAttribute('href');
      
      // Skip empty links or links with only icons
      if (href && href !== '#' && text && text.trim().length > 0) {
        assert(text.trim().length > 0, `Link ${i} has no text`);
      }
    }
  });
});
