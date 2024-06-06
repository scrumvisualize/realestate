// @ts-check
const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('Verify whether Search for playwright job is possible in the Seek page', async ({ page }) => {
  const browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('/');
  await page.waitForSelector('input[id="keywords-input"]');
  const input = await page.$('input[id="keywords-input"]');

  if(input){
    await input.fill("Playwright");
    await page.click('#searchButton');
  } 

  await page.waitForSelector('span[data-automation="totalJobsCount"]');
  const totalCount = await page.$('span[data-automation="totalJobsCount"]');

  if(totalCount){

    const signInText = await totalCount.textContent();
    if(signInText){
        console.log("Print the search results value::"+signInText)
        const totalCountValue = parseInt(signInText); // Convert text content to a number
        expect(totalCountValue).not.toBe(0);
    }
  }
  await page.close();
});

