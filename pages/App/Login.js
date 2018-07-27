/**
 * Page object for confirmation page
 */
class LoginPage {
    constructor() {
        this.url = '/';
    }

    /**
     * Page elements
     */
    get emailField() {
        return $('#emailField');
    }

    get passwordField() {
        return $('#passwordField');
    }

    get togglePasswordVisible() {
        return $('.mdi-icon ');
    }

    get forgotPasswordLink() {
        return $('#forget-password');
    }

    get rememberMeLink() {
        return $('.checkbox-btn__label');
    }

    get signInButton() {
        return $('#login');
    }

    get loader() {
        return $('.load.loaded');
    }

    /**
     * Navigate to confirmation page
     */
    navigateToUrl() {
        browser.url(this.url);
        browser.waitForNotVisible(this.loader);
    }

    /**
     * Logs a user in
     *
     * @param {String} email Email to be entered
     * @param {String} password Password to be entered
     */
    login(email, password) {
        this.emailField.setValue(email);
        this.passwordField.setValue(password);
        this.signInButton.click();
    }
}

module.exports = new LoginPage();
