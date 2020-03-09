const chai = require('chai');
global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should();

exports.config = {
    specs: [
        './test/specs/*.js'
    ],

    // Patterns to exclude.
    exclude: [],
    maxInstances: 2,
    capabilities: [{
        maxInstances: 2,
        browserName: 'chrome',
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://www.which.co.uk',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ["selenium-standalone"],

    framework: 'mocha',
    reporters: [
        'spec'
        ,
        ['junit', {
            outputDir: './reports/',
            outputFileFormat: function () {
                return `testresult.xml`
            }
        }]
    ],

    mochaOpts: {
        ui: "bdd",
        compilers: ["js:babel-register"],
        timeout: 50000
    },
}

