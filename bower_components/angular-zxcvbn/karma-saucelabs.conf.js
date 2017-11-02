'use strict';

module.exports = function(config) {
  // define SL browsers
  var customLaunchers = {
    sl_ie10: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8',
      version: '10.0'
    },
    sl_ie11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 10',
      version: '11.0'
    },
    sl_edge: {
      base: 'SauceLabs',
      browserName: 'microsoftedge',
      platform: 'Windows 10',
      version: '20.10240'
    },
    sl_chrome_1: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Linux',
      version: '26'
    },
    sl_chrome_2: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Linux',
      version: '46'
    },
    sl_firefox_1: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'Linux',
      version: '13'
    },
    sl_firefox_2: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'Linux',
      version: '42'
    },
    sl_android_1: {
      base: 'SauceLabs',
      browserName: 'android',
      platform: 'Linux',
      version: '4.4'
    },
    sl_android_2: {
      base: 'SauceLabs',
      browserName: 'android',
      platform: 'Linux',
      version: '5.1'
    },
    sl_iphone_1: {
      base: 'SauceLabs',
      browserName: 'iPhone',
      platform: 'OS X 10.10',
      deviceName: 'iPad Simulator',
      version: '7.1'
    },
    sl_iphone_2: {
      base: 'SauceLabs',
      browserName: 'iPhone',
      platform: 'OS X 10.10',
      deviceName: 'iPad Simulator',
      deviceOrientation: 'portrait',
      version: '9.2'
    },
    sl_safari_1: {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.8',
      version: '6.0'
    },
    sl_safari_2: {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.11',
      version: '9.0'
    }
  }

  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    sauceLabs: {
      username: 'angular-zxcvbn',
      accessKey: 'c4420ae5-5895-4aa3-8a91-4b8b9fede2d6',
      testName: 'angular-zxcvbn',
      startConnect: true
    },

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/zxcvbn/dist/zxcvbn.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/*.js',
      'test/*.js'
    ],


    // list of files to exclude
    exclude: [

    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['dots', 'saucelabs'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    concurrency: 3,

    customLaunchers: customLaunchers,

    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 1,
    browserNoActivityTimeout: 240000,
    captureTimeout: 240000,

    browsers: Object.keys(customLaunchers)
  });
};
