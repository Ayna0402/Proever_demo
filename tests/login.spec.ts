import { test, expect } from '@playwright/test';

// test.use({ storageState: undefined });
test.describe('SC1:Login on system', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www-dev.proever.app/signin');
    await expect(page).toHaveURL(/ciamlogin\.com/);
  });

  test('TCs1: Login success', async ({ page }) => {
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill(process.env.LOGIN_EMAIL ?? '');
    const nextbutton = page.locator('input[type="submit"]');
    await nextbutton.click();
    const passwordInput = page.locator('input[type="password"]');
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill(process.env.LOGIN_PASSWORD ?? '');
    const signinBtn = page.locator('input[type="submit"]');
    await signinBtn.click();
    await expect(page).toHaveURL(/\/login/);
    const rejectBtn = page.locator('#idBtn_Back');
    await rejectBtn.click();
    await expect(page).toHaveURL(/\/home/);
    await page.context().storageState({ path: 'auth.json' });
  });
});
