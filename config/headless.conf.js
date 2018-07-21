const defaultConfig = require('./default.conf').config;

const object = {
    capabilities: [{
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--disable-gpu', '--window-size=1280,800'],
            binary: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        },
    }],
};

const newConfig = Object.assign(defaultConfig, object);

exports.config = newConfig;
