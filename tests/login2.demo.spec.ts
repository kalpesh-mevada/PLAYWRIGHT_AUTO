import {test, expect} from '@playwright/test';  

test('login test' , async ({page}) =>{ // page is fixture provided by playwright test runner or global variable
    await page.goto('https://www.saucedemo.com/');

    const username = page.getByPlaceholder('Username');
    const password = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'Login' });

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.inventory_item')).toHaveCount(6);
    await page.pause(); // pause the test to see the result in the browser
})