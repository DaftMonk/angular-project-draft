// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: './',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine', 'requirejs', 'traceur'],

    // list of files / patterns to load in the browser
    files: [
      'client/bower_components/angular/angular.js',
      'client/bower_components/angular-mocks/angular-mocks.js',
      'client/bower_components/angular-route/angular-route.js',
      {pattern: 'client/app/**/*.js', included: false},
      'client/app/**/*.html',
      {pattern: 'node_modules/es6-shim/es6-shim.js', included: false},
      {pattern: 'node_modules/rtts-assert/src/**/*.js', included: false},
      'test-main.js'
    ],

    // list of files / patterns to exclude
    exclude: [
      'client/app/index.html'
    ],

    preprocessors: {
      '**/*.html': 'ng-html2js',
      'client/app/**/*.js': ['traceur'],
      'node_modules/rtts-assert/src/**/*.js': ['traceur']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/app/',
    },

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // reporter types:
    // - dots
    // - progress (default)
    // - spec (karma-spec-reporter)
    // - junit
    // - growl
    // - coverage
    reporters: ['spec'],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    traceurPreprocessor: {
      options: {
        sourceMap: true,
        modules: 'amd',
        annotations: true,
        types: true
      }
    },

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};