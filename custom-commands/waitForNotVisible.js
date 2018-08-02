/**
 * Waits for an element to be visible, and then not visible
 * @param {Object} element this is a webdriver object
 */
module.exports.waitForNotVisible = (element) => {
    element.waitForVisible(3000);
    element.waitForVisible(3000, true);
};
