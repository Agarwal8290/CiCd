import { test, expect } from '@playwright/test';

test.beforeEach('SignIn', async({page}) =>{
    await page.goto('https://stage.smartgardener.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByPlaceholder('Username or Email').click();
  await page.getByPlaceholder('Username or Email').fill('nitesh.agarwal@kreeti.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Nitesh@8209');
  await page.getByRole('button', { name: 'Sign In' }).click();
})


test.afterEach('Logout', async ({page})=>{
  await page.getByRole('link', { name: 'NA', exact: true }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
  await expect(page).toHaveURL('https://stage.smartgardener.com/');
})

test('Journal', async ({ page }) => {
    await expect(page).toHaveURL('https://stage.smartgardener.com/todos');
    await page.waitForLoadState('load');
  await page.getByRole('navigation').getByRole('link', { name: 'Journal' }).click();
  const heading = await page.locator('.large-text.left');
  await expect(heading).toHaveText('Journal for this');
});

test('test', async ({ page }) => {
  await expect(page).toHaveURL('https://stage.smartgardener.com/todos');
  await page.waitForLoadState('load');
await page.getByRole('navigation').getByRole('link', { name: 'Harvest' }).click();
const heading = await page.locator('.large-text');
await expect(heading).toHaveText('+ Add Harvest');
await page.screenshot({ path: 'fullpage-screenshot.png', fullPage: true });
});

