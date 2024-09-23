const path = require('path');
process.env.CHROME_BIN = require('puppeteer').executablePath(); //控制无头 Chrome 浏览器，这是一种轻量级且高效的方式，特别适合持续集成环境。
module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // list of files / patterns to load in the browser
    files: [
      './test/**/*.spec.js'
    ],
    frameworks: ['mocha', 'webpack'],
    browsers: ['ChromeHeadless'],
    preprocessors: {
      './test/**/*.spec.js': ['webpack']
    },
    webpack: {
      module: {
          rules: [
              {
                  test: /\.js$/,
                  use: {
                      loader: 'babel-loader', // 生成代码覆盖率报告，可以清晰了解哪些代码段没有被测试覆盖到
                      options: {} // esModules: true, 去掉这个选项后，代码覆盖工具依然可以正常处理 ES 模块，因为 Babel 仍然会自动识别和处理 ES 模块, 只是你不再显式地告诉它要支持 ES 模块
                  },
                  include: path.resolve('src/') // 确保只覆盖 src 下的文件
              }
            ]
        }
    },

    // 下面两个配置生成覆盖率报告，可以生成 HTML、lcov 等格式的报告
    reporters: ['progress', 'coverage-istanbul'],
    coverageIstanbulReporter: {
        reports: ['html', 'lcovonly', 'text-summary'],
        fixWebpackSourcePaths: true
    },

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity
  })
}