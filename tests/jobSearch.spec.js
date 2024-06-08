// @ts-check
const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const SearchBoxPage = require('./pageObjects/searchBoxPage');

test.describe('Search functionality', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Verify whether Search for playwright job is possible in the Seek page', async ({ page }) => {
    const searchPage = new SearchBoxPage(page);
    await searchPage.typeSearchQuery("playwright");
    await searchPage.clickSearchButton();
    const totalCount = await searchPage.getJobsCountHeader();
    console.log("What is the count we getting::"+totalCount);
    const totalCountValue = parseInt(totalCount);
    expect(totalCountValue).toBeGreaterThan(0);
    await page.close();
  });

  test('Type playwright, select Testing & QA and choose All Brisbane in the search page', async ({ page }) => {
    const searchPage = new SearchBoxPage(page);
    await searchPage.typeSearchQuery("cypress");
    await searchPage.clickClassificationField();
    await searchPage.selectParentClassificationByText("Information & Communication Technology");
    await searchPage.selectClassificationByText("Testing & Quality Assurance");
    await searchPage.typeWhereBoxField("All Brisbane QLD");
    await page.waitForSelector('button[data-automation="searchButton"]');
    const searchButton = await searchPage.getSearchButton();
    await searchButton.click({ force: true });
    const totalCount = await searchPage.getJobsCountHeader();
    console.log("What is the count we getting::"+totalCount);
    const totalCountValue = parseInt(totalCount);
    expect(totalCountValue).toBeGreaterThan(0);
  });

  test('Click on All Work types and click on Full time check box', async ({ page }) => {
    const searchPage = new SearchBoxPage(page);
    await searchPage.getMoreOptionsButton();
    const workTypesBox = await searchPage.getWorkTypesDropdown();
    await workTypesBox.click({ force: true });
    const workTypesOption = await searchPage.getWorkTypesOption("Full time");
    await workTypesOption.click();
    const workTypeText = await searchPage.getSelectedWorkTypeOption();
    console.log("Option text ::"+workTypeText);
    expect(workTypeText).toContain("Full time");
  });
  
});