import {test, expect} from '@playwright/test';  

test('login test' , async ({page}) =>{ // page is fixture provided by playwright test runner or global variable
    await page.goto('https://www.saucedemo.com/');

    await page.gotourl(''); // This will give compile time error because gotourl is not a method of page object. The correct method is goto.
    page.randMathod(); // This will give compile time error because randMethod is not a method of page object. The correct method is goto.
    const username = page.locator('#user-name');
    const password = page.locator('#password');
    const loginButton = page.locator('#login-button');

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();

    //username.goto('') //Not give compile time error but will give runtime error because username is not a page object, it is a locator object. So we cannot use goto method on locator object. We can use goto method only on page object.

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.inventory_item')).toHaveCount(6);
    await page.pause(); // pause the test to see the result in the browser
})