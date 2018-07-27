/**
 * Page object for register page
 */
class RegisterPage {
    constructor() {
        this.url = '/register';
    }

    /**
     * Page elements
     */
    get heading () {
        return $('.account__head .account__title');
    }

    get subHeading () {
        return $('.account__head .account__subhead');
    }

    get companyField () {
        return $('#companyname');
    }

    get companyErrorMsg () {
        return $('#companyname+.text-help');
    }

    get usernameField () {
        return $('#usernameField');
    }

    get usernameErrorMsg () {
        return $('#usernameField+.text-help');
    }

    get emailField () {
        return $('#emailField');
    }

    get emailErrorMsg () {
        return $('#emailField+.text-help');
    }

    get passwordField () {
        return $('#passwordField');
    }

    get passwordErrorMsg () {
        return $('#passwordField+.text-help');
    }

    get passwordToggle () {
        return $('#showPasswordBtn');
    }

    get signUpButton () {
        return $('#next');
    }

    get logInLink () {
        return $('#signinLink');
    }

    get accountCard () {
        return $('div .account__card');
    }

    get loader () {
        return $('.load.loaded');
    }

    get back () {
        return $('#back');
    }
    /**
     * Register user
     *
     * @param {String} company String to be entered as company name
     * @param {String} username String to be entered as username
     * @param {String} email String to be entered as email
     * @param {String} password String to be entered as password
     */
    register(company, username, email, password) {
        this.companyField.setValue(company);
        this.usernameField.setValue(username);
        this.emailField.setValue(email);
        this.passwordField.setValue(password);
        this.signUpButton.click();
    }

    enterValues(company, username, email, password) {
        this.companyField.setValue(company);
        this.usernameField.setValue(username);
        this.emailField.setValue(email);
        this.passwordField.setValue(password);
    }

    /**
     * Navigate to register page
     */
    navigateToUrl() {
        browser.url(this.url);
        browser.waitForNotVisible(this.loader);
    }
}

module.exports = new RegisterPage();
