import { test, expect } from '@playwright/test';

test('Page navigation', async ({ page }) => {

    await page.goto('http://webjms.atimsonline.com:1051/prebook/login/');
    // Wait for login page
    // await page.waitForLoadState('domcontentloaded');

    // // Enter credentials
    await page.locator('#UserName').fill('dssiadmin');
    await page.locator('#Password').fill('P@ssw0rd!');

    // // Click Login
    await page.locator('#btnLogin').click();

    // Wait for navigation
    await page.waitForTimeout(100000);

    console.log('Current URL:', page.url());
    console.log('Page title:', await page.title());

});