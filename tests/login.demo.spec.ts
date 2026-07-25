import {test, expect} from '@playwright/test';

test( 'Login test', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await page.pause();
})