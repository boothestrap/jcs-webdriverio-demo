const expect = require('chai').expect;
const registerPage = require('../../pages/Register');

describe('register tests', () => {
    it('should register user', () => {
        browser.url('http://register.postured.io/register');
        registerPage.register('QW', 'demo', 'demo@postured.io', '123456');
        console.log(browser.toLowerCase('DANIELLE'));
        browser.enter();
        browser.pause(5000);
    })
})