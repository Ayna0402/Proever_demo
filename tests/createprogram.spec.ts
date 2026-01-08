import { test, expect } from '../fixtures';
import { CREATE_PROGRAMS_PAGE_URL } from '../constants';
import { CreateProgramPage } from '../page/CreateProgramPage';

test.beforeEach(async ({ page }) => {
  await page.goto(CREATE_PROGRAMS_PAGE_URL);
});

test('TCs1: Create Program success', async ({ page, createProgram }) => {
  const timestamp = new Date().toISOString();
  await createProgram.programName.fill(`Test Create${timestamp}`);
  await createProgram.keyProgram.fill(`Key${timestamp}`);
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
