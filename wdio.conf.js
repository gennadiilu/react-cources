/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

// var debug = process.env.DEBUG;
// var defaultCapabilities = ...;
// var defaultTimeoutInterval = ...;
// var defaultSpecs = ...;

exports.config = {
  // execArgv: ['--inspect=127.0.0.1:5859'],
  services: ['selenium-standalone', 'screenshots-cleanup'],

  screenshotPath: 'shots',

  cleanScreenshotsFolder: {
    folder: 'shots',
    pattern: '/**/*.png'
  },

  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: ['./test/specs/**/*.spec.js'],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude option in
  // order to group specific specs to a specific capability.
  //
  //
  // First you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox and Safari) and you have
  // set maxInstances to 1, wdio will spawn 3 processes. Therefor if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property basically handles how many capabilities
  // from the same test should run tests.
  //
  //
  maxInstances: 1,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [
    {
      browserName: 'chrome'
    }
  ],
  //
  // When enabled opens a debug port for node-inspector and pauses execution
  // on `debugger` statements. The node-inspector can be attached with:
  // `node-inspector --debug-port 5859 --no-preload`
  // When debugging it is also recommended to change the timeout interval of
  // test runner (eg. jasmineNodeOpts.defaultTimeoutInterval) to a very high
  // value and setting maxInstances to 1.
  debug: false,
  //
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Per default WebdriverIO commands getting executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an async way
  // using promises you can set the sync command to false.
  sync: true,
  //
  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: 'error',
  //
  // Enables colors for log output.
  coloredLogs: true,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: 'http://localhost:1000',
  //
  // Default timeout for all waitForXXX commands.
  waitforTimeout: 10000,
  //
  // Initialize the browser instance with a WebdriverIO plugin. The object should have the
  // plugin name as key and the desired plugin options as property. Make sure you have
  // the plugin installed before running any tests. The following plugins are currently
  // available:
  // WebdriverCSS: https://github.com/webdriverio/webdrivercss
  // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
  // Browserevent: https://github.com/webdriverio/browserevent
  plugins: {},
  //
  // Framework you want to run your specs with.
  // The following are supported: mocha, jasmine and cucumber
  // see also: http://webdriver.io/guide/testrunner/frameworks.html
  //
  // Make sure you have the wdio adapter package for the specific framework installed before running any tests.
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 24 * 60 * 60 * 1000
  },
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: http://webdriver.io/guide.html and click on "Reporters" in left column
  reporters: ['dot', 'spec'],
  before() {
    require('@babel/register');
    global.expect = require('expect');
  }
};
