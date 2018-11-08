const signInPage = require('../pages/SignIn');
const { expect } = require('chai');
const data = require('../data/test.data');
// const forgotPasswordPage = require('../pages/ForgotPassword');

describe('sign in tests', () => {
    describe('invalid sign in tests', () => {
        it('should show an error message if user does not enter an email', () => {
            signInPage.navigateToUrl();
            signInPage.passwordField.setValue(data.password);
            signInPage.rememberMe.click();
            signInPage.signInButton.click();
            expect(signInPage.errorMessage.getText()).to.equal('Invalid email or password.');
        });

        it('should show an error message if user does not enter a password', () => {
            signInPage.navigateToUrl();
            signInPage.emailField.setValue(data.email);
            signInPage.rememberMe.click();
            signInPage.signInButton.click();
            expect(signInPage.errorMessage.getText()).to.equal('Invalid email or password.');
        });
    });
    describe('valid sign in tests', () => {
        it('should successfully sign in user', () => {
            signInPage.navigateToUrl();
            signInPage.emailField.setValue(data.email);
            signInPage.passwordField.setValue(data.password);
            signInPage.rememberMe.click();
            signInPage.signInButton.click();
            expect(browser.getUrl()).to.equal(`https://courses.ultimateqa.com/collections`);
        });
    });
});
