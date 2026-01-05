import { test, expect } from '@playwright/test';

test.describe('SC1:Login on system', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://dev-proever.sun-asterisk.vn/signin');
    await expect(page).toHaveURL(/ciamlogin\.com/);
  });

  test('TCs1: Login success', async ({ page }) => {
    // test.setTimeout(600000);
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill('duong.thi.van-b+innovator2@sun-asterisk.com');
    const nextbutton = page.locator('input[type="submit"]');
    await nextbutton.click();
    const passwordInput = page.locator('input[type="password"]');
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill('Vanduong@0402@@');
    const signinBtn = page.locator('input[type="submit"]');
    await signinBtn.click();
    await expect(page).toHaveURL(/\/login/);
    const rejectBtn = page.locator('#idBtn_Back');
    await rejectBtn.click();
    await expect(page).toHaveURL(/\/home/);
    await page.goto('https://dev-proever.sun-asterisk.vn/projects');
    await page.goto(
      'https://dev-proever.sun-asterisk.vn/projects/e537d81d-202d-4af9-a860-c93542c99f57/tickets/boards/1ac4ba42-4a34-4290-972f-ef3ee6266f09',
      { waitUntil: 'domcontentloaded' }
    );

    const addBtn = page
      .locator(
        'svg path[d="M10 2.5a.5.5 0 0 0-1 0V9H2.5a.5.5 0 0 0 0 1H9v6.5a.5.5 0 0 0 1 0V10h6.5a.5.5 0 0 0 0-1H10V2.5Z"]'
      )
      .locator('..')
      .locator('..')
      .nth(0);

    for (let i = 1; i <= 20000; i++) {
      test.setTimeout(1000000);
      await addBtn.click();
    }
  });
});
