import { test as base, expect } from '@playwright/test';
import { CreateProgramPage } from './page/CreateProgramPage';
import { CreateProjectPage } from './page/CreateProjectPage';

interface Myfixture {
  createProgram: CreateProgramPage;
  createProject: CreateProjectPage;
}

export const test = base.extend<Myfixture>({
  createProgram: async ({ page }, use) => {
    const createProgram = new CreateProgramPage(page);
    await use(createProgram);
  },
  createProject: async ({ page }, use) => {
    const createProject = new CreateProjectPage(page);
    await use(createProject);
  },
});

export { expect };
