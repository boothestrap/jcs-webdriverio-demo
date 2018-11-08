/**
 * Page object for sign in page
 */
class SignInPage {
    constructor() {
        this.url = 'https://courses.ultimateqa.com/users/sign_in';
    }

    /**
     * Page elements
     */

    get linkedInButton() {
        return $('a.btn.linkedin');
    }

    get emailField() {
        return $('#user_email');
    }

    get passwordField() {
        return $('#user_password');
    }

    get rememberMe() {
        return $('#user_remember_me');
    }

    get forgotPassword() {
        return $('a.forgot-password');
    }

    get signInButton() {
        return $('#btn-signin');
    }

    get createNewAccount() {
        return $('col-sm-12.modal-s-bottom__link');
    }

    get errorMessage() {
        return $('.notifications-error__list-item');
    }

    /**
     * Navigate to Sign In page
     */
    navigateToUrl() {
        browser.url(this.url);
    }
}

module.exports = new SignInPage();
