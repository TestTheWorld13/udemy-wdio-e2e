import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^the Google page is opened$/, async function () {
  console.log('Before opening the browser ...');
  await browser.url("https://www.google.com");
  await browser.pause(1000);
  // browser.debug()
  console.log('After opening the browser ...');
});

// When STEPS
When(/^search with (.*)$/, async function (searchItem) {
  console.log('>> searchItem: ${searchItem}');
  let ele = await $('[name=q]')
  await ele.setValue(searchItem)
  await browser.keys("Enter")
}); 

// Then STEPS
Then(/^click on first search result$/, async function () {
  let ele = await $("<h3>")
  ele.click()
});

Then(/^the url should match (.*)$/, async function (expectedURL) {
    console.log('>> expectedURL: ${expectedURL}');
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL)
});