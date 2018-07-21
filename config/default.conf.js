const customCommands = require('../custom-commands');

exports.config = {
    specs: [
        './tests/**/*.js',
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'firefox',
    }],
    sync: true,
    logLevel: 'error',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,

    screenshotPath: 'screenshots',

    baseUrl: 'http://http://register.postured.io',

    waitforTimeout: 10000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    services: ['selenium-standalone'],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
    },

    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    before: (capabilities) => {
        customCommands.load();
        if (capabilities.type === 'mobile') {
            browser.windowHandleSize({ width: 411, height: 731 });
        }
    },
};
