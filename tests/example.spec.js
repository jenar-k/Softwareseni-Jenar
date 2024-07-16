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
    await expect(page.locator('//title[contains(text(),"Swag Labs")]')).toBeVisible()
    await expect(page.locator('//span[contains(text(),"Products")]')).toBeVisible()

    //Click item one = Sauce Labs Backpack
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    //Click item one = Sauce Labs Bike Light
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    //Click item one = Sauce Labs Bolt T-Shirt
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    // Click Cart icon
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Assertion 3 items is successfully in the cart
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible()
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')).toBeVisible()
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')).toBeVisible()

    // Remove T-Shirt
    await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();

    // Assertion T-Shirt is removed
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')).toBeHidden()
    
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Jenar K');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('Key');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('55581');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="back-to-products"]').click();
});