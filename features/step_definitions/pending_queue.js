const { Given, When, Then } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');

const assert = require('assert');

     When('a valid moderator logs into moderation ui', async function () {
       // console.log(module)
    await this.driver.get("http://localhost:8080/")
  })


    Then('the moderator should see the number of items in the pending queue', async function () {
    const noOfPendingItems = await this.driver.wait(until.elementLocated(By.css('.queue-list-header-queue-count-big'))).getText()
    console.log(noOfPendingItems)
    assert.notEqual(noOfPendingItems,"No pending items")
});

Then('the moderator should Approve the item assigned to them', async function () {
    const currentUrl = await this.driver.getCurrentUrl();
    console.log(currentUrl);
    await this.driver.wait(until.elementLocated(By.css('.approve-button'))).click();
  });