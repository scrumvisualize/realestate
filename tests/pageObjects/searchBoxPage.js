class SearchBoxPage {

    constructor(page) {
        this.page = page;
        this.searchBoxLocator = 'input[id="keywords-input"]'; // CSS selector for the search box input
        this.searchButtonLocator = 'button[id="searchButton"]'; // CSS selector for the search button
        this.totalJobsCountLocator = 'span[data-automation="totalJobsCount"]'; // CSS selector for the jobs count
        this.classificationFieldLocator = 'label[data-automation="classificationDropDownList"]'; // CSS selector for the jobs count
        this.classificationTypeSelector = 'a span[data-automation="item-text"]';
        this.whereBoxSelector = 'input[id="SearchBar__Where"]';
        this.searchBtnLocator = 'button[data-automation="searchButton"]';
        
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

    async clickClassificationField() {
        await this.page.click(this.classificationFieldLocator); // Click the search button
    }

    async selectParentClassificationByText(checkboxText) {
        // Construct the selector dynamically using the provided checkbox text
        const element = `${this.classificationTypeSelector}:text("${checkboxText}")`;
    
        // Locate the checkbox element using the constructed selector
        const checkbox = await this.page.locator(element);
    
        // Check the checkbox
        await checkbox.check();
    }
    
    async selectClassificationByText(checkboxText) {
        // Construct the selector dynamically using the provided checkbox text
        const element = `${this.classificationTypeSelector}:text("${checkboxText}")`;
    
        // Locate the checkbox element using the constructed selector
        const checkbox = await this.page.locator(element);
    
        // Check the checkbox
        await checkbox.check();
    }

    async typeWhereBoxField(text) {
        await this.page.fill(this.whereBoxSelector, text); 
        await this.page.keyboard.press('Enter'); // Press "Enter" key
    }

    async getSearchButton() {
        await this.page.click(this.searchBtnLocator); // Click the search button
    }


}

module.exports = SearchBoxPage;