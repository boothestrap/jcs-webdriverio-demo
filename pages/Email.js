/**
 * Page object for email page
 */
class EmailPage {
    constructor() {
        this.url = '/';
    }

    /**
     * Page elements
     */

    get emailField() {
        return $('input#identifierId');
    }

    get nextButton() {
        return $('div#identifierNext');
    }

    /**
     * Navigate to sign in page
     */
    navigateToUrl() {
        browser.url(this.url);
        // browser.waitForVisible(this.emailField);
    }
}

module.exports = new EmailPage();
