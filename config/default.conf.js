const url = require('./urls');

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

    baseUrl: url[process.env.ENV][process.env.APP],

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
        // customCommands.load();
        if (capabilities.type === 'mobile') {
            browser.windowHandleSize({ width: 411, height: 731 });
        }
    },

    /**
    * Gets executed just before initialising the webdriver session and test framework. It allows you
    * to manipulate configurations depending on the capability or spec.
    * @param {Object} config wdio configuration object
    * @param {Array.<Object>} capabilities list of capabilities details
    * @param {Array.<String>} specs List of spec file paths that are to be run
    */
    beforeSession: (config, capabilities, [specs]) => {
        if (!specs.includes(process.env.APP)) {
            process.exit();
        }
    },

};
