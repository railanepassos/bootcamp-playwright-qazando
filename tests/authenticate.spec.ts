import { test, expect } from '@playwright/test';

test('successfully login @login @regression', async ({ page }) => {
  test.setTimeout(20000);

  // Given the user is on the home page
  await page.goto('https://automationpratice.com.br/');
  await page.screenshot({ path: `screenshots/successfullyLogin01.png` })

  // When the user autenticate with valid credentials
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@teste.com.br');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.screenshot({ path: `screenshots/successfullyLogin02.png` })
  await page.getByRole('button', { name: 'login' }).click();

  // Then the user should be logged in
  await page.getByRole('button', { name: 'OK' }).click();
  await page.screenshot({ path: `screenshots/successfullyLogin03.png` })

})