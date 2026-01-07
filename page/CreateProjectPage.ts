import { Locator, Page, expect } from '@playwright/test';

export class CreateProjectPage {
  readonly projectName: Locator;
  readonly keyProject: Locator;
  readonly selectManagerBtn: Locator;
  readonly searchInput: Locator;
  readonly timezoneselect: Locator;
  readonly createBtn: Locator;
  readonly selectType: Locator;
  readonly selectTemplate: Locator;
  readonly valueSelect: Locator;

  constructor(page: Page) {
    this.projectName = page.locator('input[type = text]').nth(0);
    this.keyProject = page.locator('input[type = text]').nth(1);
    this.selectManagerBtn = page.locator('form button[type= button]').nth(0);
    this.searchInput = page.locator(
      'div[data-radix-popper-content-wrapper] input[type=text]'
    );

    this.selectType = page.locator('form button[type= button]').nth(1);
    this.valueSelect = page.locator(
      'div[data-radix-popper-content-wrapper] span'
    );
    this.selectTemplate = page.locator('form button[type= button]').nth(3);
    this.timezoneselect = page.locator('form button[type= button]').nth(4);
    this.createBtn = page.locator('form button[type=submit]');
  }
}
