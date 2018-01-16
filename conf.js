  // conf.js
exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  //seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
  specs: ['specs/*spec.js'],

  // restartBrowserBetweenTests: true,

  onPrepare: function(){
      var caps = browser.getCapabilities();
  },

  multiCapabilities: [{
    browserName: 'firefox',
    version: '56',
    platform: 'macOS 10.12',
    name: "ff-mac",
    shardTestFiles: true,
    maxInstances: 25
  }, {
    browserName: 'chrome',
    version: '61',
    platform: 'Windows 10',
    name: "chrome-win10",
    shardTestFiles: true,
    maxInstances: 25
  }, {
    browserName: 'internet explorer',
    version: '11',
    platform: 'Windows 10',
    name: "ie11",
    shardTestFiles: true,
    maxInstances: 25
  }, {
    browserName: 'internet explorer',
    version: '10',
    platform: 'Windows 8',
    name: 'ie10-win8',
    shardTestFiles: true,
    maxInstances: 25
  }],

  onComplete: function() {

    var printSessionId = function(jobName){
      browser.getSession().then(function(session) {
        console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
      });
    };
    printSessionId("Insert Job Name Here");
  },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 240000
    }
};
