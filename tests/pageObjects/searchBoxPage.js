class SearchBoxPage {

    constructor(page) {
        this.page = page;
        this.searchBoxLocator = 'input[id="keywords-input"]'; // CSS selector for the search box input
        this.searchButtonLocator = 'button[id="searchButton"]'; // CSS selector for the search button
        this.totalJobsCountLocator = 'span[data-automation="totalJobsCount"]'; // CSS selector for the jobs count
    }

    async typeSearchQuery(query) {
        await this.page.fill(this.searchBoxLocator, query); // Fill the search box with the provided query
    }

    async clickSearchButton() {
        await this.page.click(this.searchButtonLocator); // Click the search button
    }

    async getJobsCountHeader() {
        const element = await this.page.locator(this.totalJobsCountLocator).first(); // Assuming there's only one element
        const text = await element.textContent();
        return text;
    }
}

module.exports = SearchBoxPage;