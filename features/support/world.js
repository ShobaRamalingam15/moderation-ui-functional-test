const seleniumWebdriver = require('selenium-webdriver');
const { setWorldConstructor, setDefaultTimeout } = require('cucumber')

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
                  .forBrowser('firefox')
                  .build();
}

/*module.exports = function() {
  this.World = CustomWorld;

  // sets a default timeout to 30 seconds.  Time is in ms.
  this.setDefaultTimeout(30 * 1000);
};*/

setWorldConstructor(CustomWorld);

setDefaultTimeout(60 * 1000);
