import { test, expect } from '../fixtures';
import { CREAT_PROJECTS_PAGE_URL } from '../constants';

test.beforeEach(async ({ page }) => {
  await page.goto(CREAT_PROJECTS_PAGE_URL);
});

test('TCs1: Create Project Waterfall success', async ({ createProject }) => {
  const timestamp = new Date().toISOString();
  await createProject.projectName.fill(`Test Create${timestamp}`);
  await createProject.keyProject.fill(`Key${timestamp}`);
  await createProject.selectManagerBtn.click();
  await createProject.searchInput.fill('Team A');
  await createProject.valueSelect.getByText('Team A').click();
  await createProject.selectType.click();
  await createProject.valueSelect.getByText('WaterFall').click();
  await createProject.selectTemplate.click();
  await createProject.valueSelect.getByText('Not template').click();
  await createProject.timezoneselect.click();
  await createProject.valueSelect.getByText('(UTC-11) Pacific/Midway').click();
  await createProject.createBtn.click();
});

test('TCs1: Create Project Agile success', async ({ createProject }) => {
  const timestamp = new Date().toISOString();
  await createProject.projectName.fill(`Test Create${timestamp}`);
  await createProject.keyProject.fill(`Key${timestamp}`);
  await createProject.selectManagerBtn.click();
  await createProject.searchInput.fill('Team A');
  await createProject.valueSelect.getByText('Team A').click();
  await createProject.selectType.click();
  await createProject.valueSelect.getByText('Agile').click();
  await createProject.timezoneselect.click();
  await createProject.valueSelect.getByText('(UTC-11) Pacific/Midway').click();
  await createProject.createBtn.click();
});
