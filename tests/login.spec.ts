import { test, expect } from '@playwright/test';
import

test.describe('SC1:Login on system', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www-dev.proever.app/signin');
    await expect(page).toHaveURL(/ciamlogin\.com/);
  });

  test('TCs1: Login success', async ({ page }) => {
    new createProgramPage = new Crêta
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill('duong.thi.van-b+1213@sun-asterisk.com');
    const nextbutton = page.locator('input[type="submit"]');
    await nextbutton.click();
    const passwordInput = page.locator('input[type="password"]');
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill('@Proever123456');
    const signinBtn = page.locator('input[type="submit"]');
    await signinBtn.click();
    await expect(page).toHaveURL(/\/login/);
    const rejectBtn = page.locator('#idBtn_Back');
    await rejectBtn.click();
    await expect(page).toHaveURL(/\/home/);
  });
});
