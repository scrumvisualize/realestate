// @ts-check
const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test.describe('uitests', () => {
  test('uitests: Verify whether the Seek site has SEEK button in the main page', async ({ page }) => {
    const browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('/');
    await page.waitForSelector('#searchButton');
  
    /* Get the text content of the h1 element */
    const buttonText = await page.textContent('#searchButton');
    console.log('Button text:', buttonText);
  
    /*  Expect a title "to contain" some string. */
    await expect(buttonText).toContain("SEEK")
    await page.close();
  });

});