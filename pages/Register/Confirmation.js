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
    get heading() {
        return $('.account__head .account__title');
    }

    get subHeading() {
        return $('.account__head .account__subhead ');
    }
}

module.exports = new ConfirmationPage();
