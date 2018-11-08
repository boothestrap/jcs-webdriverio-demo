/**
 * Page object for sign in page
 */
class SignUpPage {
    constructor() {
        this.url = '/sign_up';
    }

    /**
     * Page elements
     */

    get linkedInButton() {
        return $('a.btn.linkedin');
    }

    get firstName() {
        return $('#user_first_name');
    }

    get lastName() {
        return $('#user_last_name');
    }

    get email() {
        return $('#user_email');
    }

    get password() {
        return $('#user_password');
    }

    get customerPrivacyPolicy() {
        return $('#user_terms');
    }

    get recapcha() {
        return $('.recaptcha-checkbox-checkmark');
    }

    get signUp() {
        return $('#btn-signup');
    }

    get errorMessage() {
        return $('#notifications-error');
    }
}

module.exports = new SignUpPage();
