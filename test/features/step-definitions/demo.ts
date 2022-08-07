import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

// ----- Given STEPS -----
Given(/^the Google page is opened$/, async function () {
  console.log("Before opening the browser ...");
  await browser.url("https://www.google.com");
  await browser.pause(1000);
  // browser.debug()
  console.log("After opening the browser ...");
});

Given(/^a web page opened$/, async function () {
  await browser.url("/inputs");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

// ----- When STEPS ------
When(/^search with (.*)$/, async function (searchItem) {
  console.log(">> searchItem: ${searchItem}");
  let ele = await $("[name=q]");
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

When(/^perform a web interactions$/, async function () {
  /**
   * 1. click input box
   * Action:
   * 1. type into text field
      let ele = $('[type=number]')
      await ele.setValue('12345') 

   * 2. clear the input field and type or addValue
      let num = 123456
      let strNum = num.toString()
      let ele = $('[type=number]')

      await ele.setValue('12345') 
      await ele.addValue('strNum')

   * 3. Click and type
      await ele.click()
      await ele.addValue(strNum)
      OR
      await ele.moveToElement()
      await ele.scrollIntoView()

   * 4. slow typing
      for (let i = 0; i < strNum.length; i++){
      let charstr = strNum.charAt(i)
      await browser.pause(1000)
      await browser.keys(charstr)
  }
   */
  let num = 123456;
  let strNum = num.toString();

  let ele = await $("[type=number]");
  // await ele.setValue('12345')
  await ele.click();
  // await ele.moveToElement()
  // await ele.scrollIntoView()
  // await ele.addValue(strNum);
  
  for (let i = 0; i < strNum.length; i++) {
    let charstr = strNum.charAt(i);
    await browser.pause(1000);
    await browser.keys(charstr);
  }
  //  await browser.debug()
});

// ----- Then STEPS ------
Then(/^click on first search result$/, async function () {
  let ele = await $("<h3>");
  ele.click();
});

Then(/^the url should match (.*)$/, async function (expectedURL) {
  console.log(">> expectedURL: ${expectedURL}");
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});
