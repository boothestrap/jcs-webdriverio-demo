/**
 * Page object for password page
 */
class PasswordPage {

    /**
     * Page elements
     */
    get passwordField() {
        return $(`.//input[@type='password']`);
    }

    get nextButton() {
        return $('div#passwordNext');
    }
}

module.exports = new PasswordPage();
