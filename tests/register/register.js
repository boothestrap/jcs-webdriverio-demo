const { expect } = require('chai');
const registerPage = require('../../pages/Register/Register');
const pricingPage = require('../../pages/Register/Pricing');
const confirmationPage = require('../../pages/Register/Confirmation');

describe('registration workflow', () => {
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

        it('should carry user to login page', () => {
            pricingPage.navigateToUrl();
            pricingPage.premiumSignUpButton.click();
            registerPage.logInLink.click();
            expect(browser.getUrl()).to.equal('http://app.postured.io/login');
        });

        it('should go back to the pricing page', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.back.click();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}${pricingPage.url}`);
        });

        it('should go back to the login page', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.logInLink.click();
            expect(browser.getUrl()).to.equal(`http://app.postured.io/login`);
        });
    });

    describe('invalid register tests', () => {
        it('should redirect to pricing page from register page', () => {
            registerPage.navigateToUrl();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}${pricingPage.url}`);
        });

        it('should redirect to pricing page from confirmation page', () => {
            confirmationPage.navigateToUrl();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}${pricingPage.url}`);
        });

        it('should show an error message when no company name is entered', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('', 'username', '123@123.com', 'Password1!');
            expect(registerPage.companyErrorMsg.getText()).to.equal('Company name is required');
        });

        it('should show an error message when spaces are entered for company name', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('     ', 'username', '123@123.com', 'Password1!');
            expect(registerPage.companyErrorMsg.getText()).to.equal('Company name is required');
        });

        it('should show an error message when company name is less than 2 characters', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('D', 'username', '123@123.com', 'Password1!');
            expect(registerPage.companyErrorMsg.getText()).to.equal('Company name is required');
        });

        it('should show an error message when no email is entered', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('company', 'username', '', 'Password1!');
            expect(registerPage.emailErrorMsg.getText()).to.equal('Email address is required');
        });

        it('should show an error message when spaces are entered as email', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('company', 'username', '     ', 'Password1!');
            expect(registerPage.emailErrorMsg.getText()).to.equal('Email address is required');
        });

        it('should show an error message when an exisitng email is used', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('company', 'username', 'demo@postured.io', 'Password1!');
            expect(registerPage.emailErrorMsg.getText()).to.equal('Please enter a valid email');
        });

        it('should show an error message when invalid email is used: 123', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('company', 'username', '123', 'Password1!');
            expect(registerPage.emailErrorMsg.getText()).to.equal('Please enter a valid email');
        });

        it('should show an error message when invalid email is used: 123@', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('company', 'username', '123@', 'Password1!');
            expect(registerPage.emailErrorMsg.getText()).to.equal('Please enter a valid email');
        });

        it('should show an error message when invalid email is used: 123@123', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('company', 'username', '123@123', 'Password1!');
            expect(registerPage.emailErrorMsg.getText()).to.equal('Please enter a valid email');
        });


        it('should show an error message when invalid email is used: 123@123.', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('company', 'username', '123@123.', 'Password1!');
            expect(registerPage.emailErrorMsg.getText()).to.equal('Please enter a valid email');
        });

        it('should show an error message when invalid email is used: 123@123.c', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('company', 'username', '123@123.c', 'Password1!');
            expect(registerPage.emailErrorMsg.getText()).to.equal('Please enter a valid email');
        });

        it('should show an error message when no password is entered', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('company', 'username', '123@123.com', '');
            expect(registerPage.passwordErrorMsg.getText()).to.equal('Password is required');
        });

        it('should show an error message when spaces are entered as password', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('company', 'username', '123@123.com', '     ');
            expect(registerPage.passwordErrorMsg.getText()).to.equal('Password is required');
        });

        it('should show an error message when an invalid password is entered; < 6 characters: pass', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('company', 'username', '123@123.com', 'pass');
            expect(registerPage.passwordErrorMsg.getText()).to.equal('Password should be at least 6 characters');
        });

        it('should show an error message when an invalid password is entered; no capital letter: password1!', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('company', 'username', '123@123.com', 'password1!');
            expect(registerPage.passwordErrorMsg.getText()).to.equal('Password should contain at least 1 capital letter');
        });

        it('should show an error message when an invalid password is entered; no numbers: Password!', () => {
            pricingPage.navigateToUrl();
            pricingPage.basicSignUpButton.click();
            registerPage.register('company', 'username', '123@123.com', 'Password!');
            expect(registerPage.passwordErrorMsg.getText()).to.equal('Password should contain at least 1 number');
        });
    });
});
