/**
 * Page object for the global navigation
 */
class GlobalNav {
    /**
     * Page elements
     */
    get hamburgerMenu() {
        return ('button.topbar__button.topbar__button--desktop');
    }

    get searchIcon() {
        return $('.topbar__btn > .lnr.lnr-magnifier');
    }

    get alarmIcon() {
        return $('.topbar__btn > .lnr.lnr-alarm');
    }

    get mailIcon() {
        return $('.topbar__btn > .lnr.lnr-envelope');
    }

    get userPicture() {
        return $('img.topbar__avatar-img');
    }

    get currentUser() {
        return $('p.topbar__avatar-name');
    }

    get profileDropdown() {
        return $('#account-dropdown');
    }

    get userProfile() {
        return $('#profile-top-nav');
    }

    get paymentInfo() {
        return $('#payment-info-top-nav');
    }

    get logOut() {
        return $('#logout-top-nav');
    }

    clickProfile() {
        this.profileDropdown.click();
        this.userProfile.waitForVisible();
        this.userProfile.click();
    }

    clickPaymentInfo() {
        this.profileDropdown.click();
        this.paymentInfo.waitForVisible();
        this.paymentInfo.click();
    }

    clickLogout() {
        this.profileDropdown.click();
        this.logOut.waitForVisible();
        this.logOut.click();
    }
}
module.exports = new GlobalNav();
