/**
 * Page object for sign in page
 */
class ForgotPasswordPage {
    constructor() {
        this.url = '/';
    }

    /**
     * Page elements
     */

    get forgotPasswordTitle() {
        return $('.reset-password__title');
    }

    get emailField() {
        return $('#user_email');
    }

    get submitButton() {
        return $('input.btn');
    }

    get errorMessage() {
        return $('.alert');
    }
}

module.exports = new ForgotPasswordPage();
