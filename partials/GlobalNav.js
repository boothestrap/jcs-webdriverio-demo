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
        return $('svg.mdi-icon.topbar__avatar-icon');
    }

    get userProfile() {
        return $('.lnr-user');
    }

    get paymentInfo() {
        return $('.lnr-calendar-full');
    }

    get logOut() {
        return $('.topbar__link-icon.lnr.lnr-exit');
    }
}
module.exports = new GlobalNav();
