module.exports = {
    "env": {
        "mocha": true
    },
    "extends": "airbnb-base",
    "rules": {
        "indent": ["error", 4],
        "no-extra-semi": ["error"],
        "no-underscore-dangle": 0,
        "class-methods-use-this": 0,
    },
    "globals": {
        "browser": true,
        "$": true,
    },

};