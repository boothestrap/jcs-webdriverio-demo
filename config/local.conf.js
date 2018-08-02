const defaultConfig = require('./default.conf').config;

const object = {
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',

    },
    {
        maxInstances: 5,
        browserName: 'chrome',
        type: 'mobile',

    },
    ],
};

const newConfig = Object.assign(defaultConfig, object);

exports.config = newConfig;
