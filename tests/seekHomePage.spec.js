// @ts-check
const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('Verify whether the Seek site has SEEK button in the main page', async ({ page }) => {
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

test('Verify whether the Seek website has Sign In button in the top right of the page', async ({ page }) => {
  const browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('/');
  const signInBtn = await page.$('a[title="Sign in"]');

  if (signInBtn) {
    // Retrieve the text content of the <a> tag
    const signInText = await signInBtn.textContent();

    // Print the retrieved text content
    console.log('Button text:', signInText);

    // Assert the text content matches "Sign in"
    const expectedText = 'Sign in';
    await expect(signInText).toEqual(expectedText);
  } else {
    console.error('Sign In link not found.');
  }
    await page.close();
});

test('Verify whether the Seek website has Employer Site link in the top right of the page @employersite', async ({ page }) => {
  const browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('/');
  const employerLink = await page.$('a[data-automation="employers_link"] span');

  if (employerLink) {
    // Retrieve the text content of the <a> tag
    const employerLinkText = await employerLink.textContent();

    // Print the retrieved text content
    console.log('Link text:', employerLinkText);

    // Assert the text content matches "Sign in"
    const expectedText = 'Employer site';
    await expect(employerLinkText).toEqual(expectedText);
  } else {
    console.error('Employer link not found.');
  }
    await page.close();
});
