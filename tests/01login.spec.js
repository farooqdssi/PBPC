
const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const testData = require('./02data.json');

test('PBPC Login Tests', () => {

    for (const user of testData.users) {

        test(`Login Test - ${user.username}`, async ({ page }) => {

            const loginPage = new LoginPage(page);

            // Given: User navigates to PBPC login page
            await loginPage.navigateToLogin();

            // When: User enters login credentials
            await loginPage.enterUsername(user.username);
            await loginPage.enterPassword(user.password);

            // And: User clicks Login
            await loginPage.clickLogin();

            // Then: Validate expected login result
            if (user.expectedResult === 'invalid') {

                await expect(loginPage.invalidMessage).toBeVisible();

                console.log('Invalid credentials validated');

            } 
            else if (user.expectedResult === 'locked') {

                await expect(loginPage.lockedMessage).toBeVisible();

                console.log('Account locked validation successful');

            } 
            else if (user.expectedResult === 'success') {

                // Replace with your actual dashboard indicator
                await expect(page).not.toHaveURL(
                    'http://13.232.176.110:711/prebook/login'
                );

                console.log('Login successful');

            }

        });
    }
});
