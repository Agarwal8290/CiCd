const { test, expect } = require('@playwright/test');

test('SignIn', async ({page})=>{
    await page.goto('https://stage.smartgardener.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByPlaceholder('Username or Email').click();
  await page.getByPlaceholder('Username or Email').fill('nitesh.agarwal@kreeti.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Nitesh@8209');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'NA', exact: true }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
});

test('invalid SignIn', async({page})=>{
    await page.goto('https://stage.smartgardener.com/');
    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.getByPlaceholder('Username or Email').click();
    await page.getByPlaceholder('Username or Email').fill('nitesh.agarwal@kreeti.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Nitesh@8290');
    await page.getByRole('button', { name: 'Sign In' }).click();
    const errorMessageLocator = page.locator('#flash .error');
    await errorMessageLocator.waitFor({ state: 'visible' });
    const errorMessage = await errorMessageLocator.textContent();
    expect(errorMessage).toBe('Invalid username or password.');
})

