const { expect } = require('chai');
const registerPage = require('../../pages/Register/Register');
const pricingPage = require('../../pages/Register/Pricing');
const confirmationPage = require('../../pages/Register/Confirmation');

describe('valid register tests', () => {
    it('should register user for the basic package', () => {
        pricingPage.navigateToUrl();
        pricingPage.basicSignUpButton.click();
        registerPage.signUpButton.waitForVisible(3000);
        registerPage.register('QW', 'demo', 'demo@postured.io', '123456');
        expect(browser.getUrl()).to.equal(browser.options.baseUrl + confirmationPage.url);
    });

    it('should register user for the special package', () => {
        pricingPage.navigateToUrl();
        pricingPage.specialSignUpButton.click();
        registerPage.signUpButton.waitForVisible(3000);
        registerPage.register('QW', 'demo', 'demo@postured.io', '123456');
        expect(browser.getUrl()).to.equal(browser.options.baseUrl + confirmationPage.url);
    });

    it('should register user for the pro package', () => {
        pricingPage.navigateToUrl();
        pricingPage.proSignUpButton.click();
        registerPage.signUpButton.waitForVisible(3000);
        registerPage.register('QW', 'demo', 'demo@postured.io', '123456');
        expect(browser.getUrl()).to.equal(browser.options.baseUrl + confirmationPage.url);
    });

    it('should register user for the premium package', () => {
        pricingPage.navigateToUrl();
        pricingPage.premiumSignUpButton.click();
        registerPage.signUpButton.waitForVisible(3000);
        registerPage.register('QW', 'demo', 'demo@postured.io', '123456');
        expect(browser.getUrl()).to.equal(browser.options.baseUrl + confirmationPage.url);
    });

    it('should not navigate directly to the register page', () => {
        registerPage.navigateToUrl();
        expect(browser.getUrl()).to.equal(browser.options.baseUrl + pricingPage.url);
    });
});

describe('invalid register tests', () => {
    it('should show an error message when no company name is entered', () => {
        registerPage.navigateToUrl();
        registerPage.companyField.click();
        registerPage.accountCard.click();
        expect(registerPage.companyErrorMsg.getText()).to.equal('Company name is required');
    });

    it('should show an error message when no username is entered', () => {
        registerPage.navigateToUrl();
        registerPage.usernameField.click();
        registerPage.accountCard.click();
        expect(registerPage.usernameErrorMsg.getText()).to.equal('Username is required');
    });

    it('should show an error message when no email is entered', () => {
        registerPage.navigateToUrl();
        registerPage.emailField.click();
        registerPage.accountCard.click();
        expect(registerPage.emailErrorMsg.getText()).to.equal('Please enter a valid email');
    });

    it('should show an error message when no password is entered', () => {
        registerPage.navigateToUrl();
        registerPage.passwordField.click();
        registerPage.accountCard.click();
        expect(registerPage.passwordErrorMsg.getText()).to.equal('Enter a strong password that\'s more than 5 characters!');
    });
});
