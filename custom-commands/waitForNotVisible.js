/**
 * Waits for an element to be visible, and then not visible
 * @param {Object} element this is a webdriver object
 */
module.exports.waitForNotVisible = (element) => {
    element.waitForVisible(2000);
    element.waitForVisible(2000, true);
};
