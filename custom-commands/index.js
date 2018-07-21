const { toLowerCase } = require('./toLowerCase');
const { enter } = require('./enter');

module.exports.load = () => {
    browser.addCommand('toLowerCase', toLowerCase);
    browser.addCommand('enter', enter);
};
