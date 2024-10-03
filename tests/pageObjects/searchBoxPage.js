class SearchBoxPage {

    constructor(page) {
        this.page = page;
        this.searchBoxLocator = 'input[id="keywords-input"]'; // CSS selector for the search box input
        this.searchButtonLocator = 'button[id="searchButton"]'; // CSS selector for the search button
        this.totalJobsCountLocator = 'span[data-automation="totalJobsCount"]'; // CSS selector for the jobs count
        this.classificationFieldLocator = 'label[data-automation="classificationDropDownList"]'; // CSS selector for the jobs count
        this.classificationTypeSelector = 'a span[data-automation="item-text"]'; //classificationDropDownList
        this.whereBoxSelector = 'input[id="SearchBar__Where"]';
        this.searchBtnLocator = 'button[data-automation="searchButton"]';
        this.moreOptionsLocator = 'button[data-automation="moreOptionsButton"] span>span';
        this.searchWorkTypesLocator = 'label[data-automation="toggleWorkTypePanel"]';
        this.searchWorkTypesOptionLocator = 'div[data-automation="refineWorkType"] ul > li > span > a span';
        this.selectedWorkTypeLocator = 'label[data-automation="toggleWorkTypePanel"] div > span > span span'
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
        
        const element = `${this.classificationTypeSelector}:text("${checkboxText}")`;
        const checkbox = await this.page.locator(element);
        await checkbox.check();
    }

    async typeWhereBoxField(text) {
        await this.page.fill(this.whereBoxSelector, text); 
        await this.page.keyboard.press('Enter'); // Press "Enter" key
    }

    async getSearchButton() {
        const searchButton = await this.page.locator(this.searchBtnLocator);
        return searchButton;
    }

    async getWorkTypesDropdown() {
        const workTypesDropdown = await this.page.locator(this.searchWorkTypesLocator);
        return workTypesDropdown;
    }

    async getWorkTypesOption(optiontext) {
        const element = `${this.searchWorkTypesOptionLocator}:text("${optiontext}")`;
        const option = await this.page.locator(element);
        return option;
    }

    async getMoreOptionsButton() {
        const element = `${this.moreOptionsLocator}:text("More options")`;
        const moreOptionsBtn = await this.page.locator(element);
        await moreOptionsBtn.click();
    }

    async getSelectedWorkTypeOption() {
        const workTypeOption = await this.page.locator(this.selectedWorkTypeLocator);
        const textValue = workTypeOption.textContent();
        return textValue;
    }

}

module.exports = SearchBoxPage;