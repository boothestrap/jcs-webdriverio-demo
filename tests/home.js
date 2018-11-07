const { expect } = require('chai');
const emailPage = require('../pages/Email');
const passwordPage = require('../pages/Password');


describe('valid gmail login', () => {
    it('should successfully sign into gmail account', () => {
        emailPage.navigateToUrl();
        emailPage.emailField.setValue('qualitytesting95@gmail.com');
        emailPage.nextButton.click();
        browser.pause(1000);
        passwordPage.passwordField.setValue('P@ssw0rd!95');
        passwordPage.nextButton.click();
        browser.pause(1000);
        expect(browser.getUrl()).to.contain('https://myaccount.google.com/');
    });
});
