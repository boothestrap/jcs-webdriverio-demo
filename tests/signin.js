const signInPage = require('../pages/SignIn');
// const forgotPasswordPage = require('../pages/ForgotPassword');

describe('sign in tests', () => {
    describe('valid sign in tests', () => {
        it('should successfully sign in user', () => {
            signInPage.navigateToUrl();
            signInPage.emailField.setValue('testing123@gmail.com');
            signInPage.passwordField.setValue('password123');
            signInPage.signInButton.click();
        });
    });

    describe('invalid sign in tests', () => {
        it('should show an error message if user does not enter an email', () => {
            signInPage.navigateToUrl();
            signInPage.passwordField.setValue('password123');
            signInPage.signInButton.click();
        });

        it('should show an error message if user does not enter a password', () => {
            signInPage.navigateToUrl();
            signInPage.emailField.setValue('testing123@gmail.com');
            signInPage.signInButton.click();
        });
    });
});
