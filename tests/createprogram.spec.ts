import { LoginPage } from '../page/LoginPage';
import { test, expect } from '@playwright/test';
import { CREATE_PROGRAM_PAGE_URL } from '../constants';
import { CreateProgram } from '../page/CreateProgramPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(page);
  await page.goto(CREATE_PROGRAM_PAGE_URL);
});

test('TCs1: Create Program success', async ({ page }) => {
  const createProgram = new CreateProgram(page);
  const timestamp = new Date().toISOString();
  await createProgram.programName.fill(`Test Create${timestamp}`);
  await createProgram.keyProject.fill(`Key${timestamp}`);
  await createProgram.selectManagerBtn.click();
  await createProgram.searchInput.fill('Team A');
  await page
    .locator('div[data-radix-popper-content-wrapper] span')
    .getByText('Team A')
    .click();
  await createProgram.timezoneBtn.click();
  await page
    .locator('div[data-radix-popper-content-wrapper] span')
    .getByText('(UTC-11) Pacific/Midway')
    .click();
  await createProgram.createBtn.click();
});
