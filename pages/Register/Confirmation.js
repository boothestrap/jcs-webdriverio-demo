/**
 * Page object for confirmation page
 */
class ConfirmationPage {
    constructor() {
        this.url = '/confirmation';
    }

    /**
     * Page elements
     */
    get heading () {
        return $('.account__head .account__title');
    }

    get subHeading () {
        return $('.account__head .account__subhead ');
    }

    get loader () {
        return $('.load.loaded');
    }

    /**
     * Navigate to confirmation page
     */
    navigateToUrl () {
        browser.url(this.url);
        browser.waitForNotVisible(this.loader);
    }
}

module.exports = new ConfirmationPage();
