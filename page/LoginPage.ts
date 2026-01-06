import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
  //   readonly page: Page;
  readonly emailInput: Locator;
  readonly nextbutton: Locator;
  readonly passwordInput: Locator;
  readonly signinBtn: Locator;
  readonly rejectBtn: Locator;
  constructor(page: Page) {
    this.emailInput = page.locator('input[type="email"]');
    this.nextbutton = page.locator('input[type="submit"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.signinBtn = page.locator('input[type="submit"]');
    this.rejectBtn = page.locator('#idBtn_Back');
    // this.page = page;
  }

  async login(page: Page) {
    await page.goto('https://www-dev.proever.app/signin');
    await this.emailInput.fill('duong.thi.van-b+1213@sun-asterisk.com');
    await this.nextbutton.click();

    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill('@Proever123456');
    await this.signinBtn.click();

    await expect(page).toHaveURL(/\/login/);
    await this.rejectBtn.click();
    await expect(page).toHaveURL(/\/home/);
  }
}
