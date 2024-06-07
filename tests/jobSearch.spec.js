// @ts-check
const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const SearchBoxPage = require('./pageObjects/searchBoxPage');

test.describe('Search functionality', () => {
  let searchPage;

  test.beforeEach(async ({ page }) => {
    searchPage = new SearchBoxPage(page); // Instantiate the SearchBoxPage class with the current page
    await page.goto('/');
  });

  test('Verify whether Search for playwright job is possible in the Seek page', async ({ page }) => {
    const searchPage = new SearchBoxPage(page);
    const browser = await chromium.launch();
    page = await browser.newPage();
    await searchPage.typeSearchQuery("playwright");
    await searchPage.clickSearchButton();
    const totalCount = await searchPage.getJobsCountHeader();
    console.log("What is the count we getting::"+totalCount);
    const totalCountValue = parseInt(totalCount);
    expect(totalCountValue).toBeGreaterThan(0);
    await page.close();
  });
  
});