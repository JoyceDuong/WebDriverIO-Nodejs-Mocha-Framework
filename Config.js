exports.config = {

    runner: 'local',

    specs:[
        "TC_01_Login.js"
    ],

    capabilities: [{
        browserName: 'chrome'
    }],

    // Config cho server

    // Declare server info
    hostname: 'localhost',
    port: 9515,
    path: '//',
    // Test Framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    }
}