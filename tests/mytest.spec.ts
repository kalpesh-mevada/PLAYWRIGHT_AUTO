import {test, expect} from '@playwright/test';

test('', async ({page}) => {
    await page.goto('https://www.google.com/');
    await page.locator('//textarea[@id="APjFqb"]').fill('playwright testing')
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000); //wait for 2 seconds to allow search results to load
   // const result = await page.locator('#search').count();   
    //expect(result).toBeGreaterThan(0)
    await page.pause() //pause the test to see the result in the browser
})