const { waitForNotVisible } = require('./waitForNotVisible');

module.exports.load = () => {
    browser.addCommand('waitForNotVisible', waitForNotVisible);
};
