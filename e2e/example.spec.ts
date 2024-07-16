import { test, expect } from '@playwright/test';

test('Saucedemo Test', async ({ page }) => {
    // Open the page of Sauce demo
    await page.goto('https://www.saucedemo.com/');
    
    // Login with valid username
    await page.locator('[data-test="username"]').fill('standard_user');
    
    // Input valid password
    await page.locator('[data-test="password"]').fill('secret_sauce');
    
    // Click Login button
    await page.locator('[data-test="login-button"]').click();
    
    //Assertion user success login and in the marketplace list
    await expect(page.locator('//title[contains(text(),"Swag Labs")]')).toHaveCount(1)
    await expect(page.locator('//span[contains(text(),"Products")]')).toHaveCount(1)
    
    //Click item one = Sauce Labs Backpack
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    //Click item one = Sauce Labs Bike Light
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    
    //Click item one = Sauce Labs Bolt T-Shirt
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    
    // Click Cart icon
    await page.locator('[data-test="shopping-cart-link"]').click();
    
    // Assertion 3 items is successfully in the cart
    await expect(page.locator('//*[contains(text(),"Sauce Labs Backpack")]')).toHaveCount(1)
    await expect(page.locator('//*[contains(text(),"Sauce Labs Bike Light")]')).toHaveCount(1)
    await expect(page.locator('//*[contains(text(),"Sauce Labs Bolt T-Shirt")]')).toHaveCount(1)
    
    // Remove T-Shirt
    await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
    
    // Assertion T-Shirt is removed
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')).toBeHidden()
    
    //Checkout
    await page.locator('[data-test="checkout"]').click();
    
    // User redirected to User information page
    await expect(page.locator('//*[contains(text(),"Checkout: Your Information")]')).toHaveCount(1)

    // Input user information
    await page.locator('[data-test="firstName"]').fill('Jenar K');
    await page.locator('[data-test="lastName"]').fill('Key');
    await page.locator('[data-test="postalCode"]').fill('55581');
    
    // Click Continue page
    await page.locator('[data-test="continue"]').click();
    
    // User redirected to Overview page
    await expect(page.locator('//*[contains(text(),"Checkout: Overview")]')).toHaveCount(1)

    // Assert product is right
    await expect(page.locator('//*[contains(text(),"Sauce Labs Backpack")]')).toHaveCount(1)
    await expect(page.locator('//*[contains(text(),"Sauce Labs Bike Light")]')).toHaveCount(1)

    // Click Finish
    await page.locator('[data-test="finish"]').click();

    // User see the thanks message
    await expect(page.locator('//*[contains(text(),"Thank you for your order!")]')).toHaveCount(1)

    // Back to market place
    await page.locator('[data-test="back-to-products"]').click();
});