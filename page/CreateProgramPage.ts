import { Locator, Page, expect } from '@playwright/test';

export class CreateProgram {
  readonly page: Page;
  readonly programName: Locator;
  readonly keyProject: Locator;
  readonly selectManagerBtn: Locator;
  readonly searchInput: Locator;
  readonly timezoneBtn: Locator;
  readonly createBtn: Locator;

  constructor(page: Page) {
    this.programName = page.locator('input[type = text]').nth(0);
    this.keyProject = page.locator('input[type = text]').nth(1);
    this.selectManagerBtn = page.locator('form button[type= button]').nth(0);
    this.searchInput = page.locator(
      'div[data-radix-popper-content-wrapper] input[type=text]'
    );
    this.timezoneBtn = page.locator('form button[type= button]').nth(1);
    this.createBtn = page.locator('form button[type=submit]');
  }
}
