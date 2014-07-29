// Karma configuration
// Generated on Mon Jul 28 2014 13:20:51 GMT+0800 (SGT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../app/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        "js/libs/jquery-2.0.3.min.js",
        "js/libs/angular-1.3.0-b17.min.js",
        "js/libs/angular-resource-1.3.0-b17.min.js",
        "js/libs/angular-route-1.3.0-b17.min.js",
        "js/libs/angular-sanitize-1.3.0-b17.min.js",
        "../test/libs/angular-mocks-1.3.0-b17.js",
        "../test/libs/sinon-1.10.2.js",
        "js/**/*.js",
        "../test/unit/**/*.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeCanary', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false

    // Plugins
    //plugins: [
    //    'karma-chrome-launcher',
    //    'karma-jasmine',
    //    'karma-phantomjs'
    //]
  });
};
