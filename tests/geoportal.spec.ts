import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('strona główna ma poprawny tytuł', async ({ page }) => {
    
  const home = new HomePage(page);
    await home.open();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Geoportal/);
});

test('link BDOT10k prowadzi do strony bazy', async ({ page }) => {

  const home = new HomePage(page);
    await home.open();

  await page.getByRole('link', { name: 'Dane', exact: true }).hover();

  await page.getByRole('link', { name: 'Baza danych obiektów topograficznych (BDOT10k)' }).click();

  await expect(page.getByRole('heading', { name: 'Baza danych obiektów topograficznych (BDOT10k)' })).toBeVisible();
});
