/**
 * Page object for the side navigation
 */
class SideNav {
    /**
     * Page elements
     */
    get sidebar() {
        return $('.sidebar');
    }

    get dashboardLink() {
        return $('#dashboard-nav');
    }

    get assessmentLink() {
        return $('#assessment-dropdown');
    }

    get recommendationsLink() {
        return $('#recommendations-nav');
    }

    get complianceLink() {
        return $('#compliance-dropdown');
    }

    get securityAwarenessLink() {
        return $('#security-awareness-dropdown');
    }

    get marketplaceLink() {
        return $('#marketplace-nav');
    }

    get postureReportLink() {
        return $('#posture-report-nav');
    }

    get companyProfileLink() {
        return $('#company-profile-nav');
    }

    get assessmentGdprLink() {
        return $('#gdpr-assessment-nav');
    }

    get complianceGdprLink() {
        return $('#gdpr-compliance-nav');
    }

    get hippaLink() {
        return $('#hippa-compliance-nav');
    }

    get pciLink() {
        return $('#pci-compliance-nav');
    }

    get nistLink() {
        return $('#nist-compliance-nav');
    }

    get policiesLink() {
        return $('#policies-nav');
    }

    get trainingLink() {
        return $('#training-nav');
    }

    clickCompanyProfile() {
        this.assessmentLink.click();
        this.companyProfileLink.waitForVisible();
        this.companyProfileLink.click();
        this.assessmentLink.click();
    }

    clickAssessmentGDPR() {
        this.assessmentLink.click();
        this.assessmentGdprLink.waitForVisible();
        this.assessmentGdprLink.click();
        this.assessmentLink.click();
    }

    clickComplianceGDPR() {
        this.complianceLink.click();
        this.complianceGdprLink.waitForVisible();
        this.complianceGdprLink.click();
        this.complianceLink.click();
    }

    clickComplianceHIPPA() {
        this.complianceLink.click();
        this.hippaLink.waitForVisible();
        this.hippaLink.click();
        this.complianceLink.click();
    }

    clickCompliancePCI() {
        this.complianceLink.click();
        this.pciLink.waitForVisible();
        this.pciLink.click();
        this.complianceLink.click();
    }

    clickComplianceNIST() {
        this.complianceLink.click();
        this.nistLink.waitForVisible();
        this.nistLink.click();
        this.complianceLink.click();
    }

    clickPolicies() {
        this.securityAwarenessLink.click();
        this.policiesLink.waitForVisible();
        this.policiesLink.click();
        this.securityAwarenessLink.click();
    }

    clickTraining() {
        this.securityAwarenessLink.click();
        this.trainingLink.waitForVisible();
        this.trainingLink.click();
        this.securityAwarenessLink.click();
    }
}
module.exports = new SideNav();
