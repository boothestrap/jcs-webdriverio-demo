/**
 * Page object for login page
 */
class LoginPage {
    constructor() {
        this.url = '/login';
    }

    get heading() {
        return $();
    }

    get subheading() {
        return $();
    }

    get usernameField() {
        return $();
    }

    get usernameErrorMsg() {
        return $();
    }

    get passwordField() {
        return $();
    }

    get passwordErrorMsg() {
        return $();
    }

    get rememberMe() {
        return $();
    }

    get forgotPassword() {
        return $();
    }

    get passwordToggle() {
        return $();
    }
}

module.exports = new LoginPage();
