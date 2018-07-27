const { expect } = require('chai');
const registerPage = require('../../pages/Register/Register');
const pricingPage = require('../../pages/Register/Pricing');
const confirmationPage = require('../../pages/Register/Confirmation');

describe('valid register tests', () => {
    it('should register user for the basic package', () => {
        pricingPage.navigateToUrl();
        pricingPage.basicSignUpButton.click();
        registerPage.signUpButton.waitForVisible(3000);
        registerPage.register('QW', 'demo', 'demo@postured.io', 'password1A');
        expect(browser.getUrl()).to.equal(browser.options.baseUrl + confirmationPage.url);
    });

    it('should register user for the special package', () => {
        pricingPage.navigateToUrl();
        pricingPage.specialSignUpButton.click();
        registerPage.signUpButton.waitForVisible(3000);
        registerPage.register('QW', 'demo', 'demo@postured.io', 'password1A');
        expect(browser.getUrl()).to.equal(browser.options.baseUrl + confirmationPage.url);
    });

    it('should register user for the pro package', () => {
        pricingPage.navigateToUrl();
        pricingPage.proSignUpButton.click();
        registerPage.signUpButton.waitForVisible(3000);
        registerPage.register('QW', 'demo', 'demo@postured.io', 'password1A');
        expect(browser.getUrl()).to.equal(browser.options.baseUrl + confirmationPage.url);
    });

    it('should register user for the premium package', () => {
        pricingPage.navigateToUrl();
        pricingPage.premiumSignUpButton.click();
        registerPage.signUpButton.waitForVisible(3000);
        registerPage.register('QW', 'demo', 'demo@postured.io', 'password1A');
        expect(browser.getUrl()).to.equal(browser.options.baseUrl + confirmationPage.url);
    });

    it('should go back to the pricing page', () => {
        pricingPage.navigateToUrl();
        pricingPage.basicSignUpButton.click();
        registerPage.back.click();
        expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}${pricingPage.url}`);
    });

    it('should go bto the login page', () => {
        pricingPage.navigateToUrl();
        pricingPage.basicSignUpButton.click();
        registerPage.logInLink.click();
        expect(browser.getUrl()).to.equal(`http://app.postured.io/login`);
    });
});

describe('invalid register tests', () => {
    it('should show an error message when no company name is entered', () => {
        pricingPage.navigateToUrl();
        pricingPage.basicSignUpButton.click();
        registerPage.companyField.click();
        registerPage.accountCard.click();
        expect(registerPage.companyErrorMsg.getText()).to.equal('Company name is required');
    });

    it('should show an error message when no username is entered', () => {
        pricingPage.navigateToUrl();
        pricingPage.basicSignUpButton.click();
        registerPage.usernameField.click();
        registerPage.accountCard.click();
        expect(registerPage.usernameErrorMsg.getText()).to.equal('Username is required');
    });

    it('should show an error message when no email is entered', () => {
        pricingPage.navigateToUrl();
        pricingPage.basicSignUpButton.click();
        registerPage.emailField.click();
        registerPage.accountCard.click();
        expect(registerPage.emailErrorMsg.getText()).to.equal('Email address is required');
    });

    it('should show an error message when no password is entered', () => {
        pricingPage.navigateToUrl();
        pricingPage.basicSignUpButton.click();
        registerPage.passwordField.click();
        registerPage.accountCard.click();
        expect(registerPage.passwordErrorMsg.getText()).to.equal('Password is required');
    });

    it('should redirect to pricing page from register page', () => {
        registerPage.navigateToUrl();
        expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}${pricingPage.url}`);
    });

    it('should redirect to pricing page from confirmation page', () => {
        confirmationPage.navigateToUrl();
        expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}${pricingPage.url}`);
    });
});
