const { expect } = require('chai');
const loginPage = require('../../pages/App/Login');
const sideNav = require('../../partials/SideNav');
const globalNav = require('../../partials/GlobalNav');

describe('navigation tests', () => {
    before(() => {
        loginPage.navigateToUrl();
        loginPage.login('demo@postured.io', 'passwordA1@');
        sideNav.sidebar.waitForVisible();
    });

    describe('side navigation root elements', () => {
        it('should navigate to dashboard page', () => {
            sideNav.dashboardLink.click();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}/app/dashboard`);
        });

        it('should navigate to recommendations page', () => {
            sideNav.recommendationsLink.click();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}/app/recommendations`);
        });

        it('should navigate to marketplace page', () => {
            sideNav.marketplaceLink.click();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}/app/marketplace`);
        });

        it('should navigate to posture report page', () => {
            sideNav.postureReportLink.click();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}/app/posture-report`);
        });
    });

    describe('side navigation assessment sub elements', () => {
        it('should navigate to company profile page', () => {
            sideNav.clickCompanyProfile();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}/app/assessment/company-profile`);
        });

        it('should navigate to GDPR assessment page', () => {
            sideNav.clickAssessmentGDPR();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}/app/assessment/gdpr`);
        });
    });

    describe('side navigation compliance sub elements', () => {
        it('should navigate to HIPPA compliance page', () => {
            sideNav.clickComplianceHIPPA();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}/app/compliance/hippa`);
        });

        it('should navigate to GDPR compliance page', () => {
            sideNav.clickComplianceGDPR();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}/app/compliance/gdpr`);
        });

        it('should navigate to PCI compliance page', () => {
            sideNav.clickCompliancePCI();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}/app/compliance/pci`);
        });

        it('should navigate to NIST compliance page', () => {
            sideNav.clickComplianceNIST();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}/app/compliance/nist-800953`);
        });
    });

    describe('top navigation tests', () => {
        it('should navigate to profile page', () => {
            globalNav.clickProfile();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}/app/user/profile`);
        });

        it('should navigate to payment info page', () => {
            globalNav.clickPaymentInfo();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}/app/payments/pricingcards`);
        });

        it('should logout', () => {
            globalNav.clickLogout();
            expect(browser.getUrl()).to.equal(`${browser.options.baseUrl}/`);
        });
    });
});
