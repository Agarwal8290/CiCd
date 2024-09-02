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
    page.on('dialog', async dialog => {
        // Verify the alert message
        expect(dialog.message()).toBe(' username or password.');
    
        // Accept the alert
        await dialog.accept();
      });
})

test('journal page', async({page})=>{
  await page.goto('https://stage.smartgardener.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByPlaceholder('Username or Email').click();
  await page.getByPlaceholder('Username or Email').fill('nitesh.agarwal@kreeti.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Nitesh@8209');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('navigation').getByRole('link', { name: 'Journal' }).click();
  await expect(page.locator('#content')).toContainText('Journal for this Garden');
  await page.getByRole('link', { name: 'NA', exact: true }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
})
