import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

// ------------------- Given STEPS -------------------------
Given(/^the Google page is opened$/, async function () {
  console.log("Before opening the browser ...");
  await browser.url("https://www.google.com");
  await browser.pause(1000);
  // browser.debug()
  console.log("After opening the browser ...");
  // console.log(`>> browserObj: ${JSON.stringify(browser)}`);
});

Given(/^a input web page opened$/, async function () {
  await browser.url("/inputs");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

Given(/^a dropdown web page opened$/, async function () {
  await browser.url("/dropdown");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

Given(/^a checkbox web page opened$/, async function () {
  await browser.url("/checkboxes");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

Given(/^a window web page opened$/, async function () {
  await browser.url("/windows");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

Given(/^a alert web page opened$/, async function () {
  await browser.url("/basic_auth");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

Given(/^a upload web page opened$/, async function () {
  await browser.url("/upload");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

Given(/^a frame web page opened$/, async function () {
  await browser.url("/frames");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

Given(/^a scroll web page opened$/, async function () {
  await browser.url("https://www.amazon.com.au/");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

Given(/^a data tables page opened$/, async function () {
  await browser.url("/tables");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

Given(/^a scroll web page opened 2$/, async function () {
  await browser.url("https://www.amazon.com.au/");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

Given(/^a waits web page opened$/, async function () {
  console.log("Before opening the browser ...");
  await browser.url("https://www.google.com");
  await browser.pause(1000);
  // browser.debug()
  console.log("After opening the browser ...");
  // console.log(`>> browserObj: ${JSON.stringify(browser)}`);
});

// ------------------- When STEPS -------------------------

When(/^search with (.*)$/, async function (searchItem) {
  console.log(`>> searchItem: ${searchItem}`);
  let ele = await $("[name=q]");
  await ele.setValue(searchItem);
  await browser.keys("Enter");
  // console.log(`>> ElementObj: ${JSON.stringify(ele)}`);
});

When(/^type into input field$/, async function () {
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

When(/^select dropdown$/, async function () {
  /**
DropDown
1. Assert default option is selected 
  let ele = await $("//select/option[@selected='selected']")
  let val = ele.getText()
  chai.expect(val).to.equal("Please select an option")

2. Select by attribute, text, index
  await ddEle.selectByVisibleText('Option 2')
  await ddEle.selectByAttribute('value', '1')
  await ddEle.selectByIndex(2)
  
3. Get a list of options
  let ddEle = await  $$("select > option");
  let arr = []

  for (let i = 0; i < ddEle.length; i++) {
    let ele = ddEle[i]
    let val = await ele.getText()
    arr.push(val)
    console.log(val)
  }
  console.log(`>> Options Array: ${arr}`);
*/

  let ddEle = await $$("select > option");
  let arr = [];

  for (let i = 0; i < ddEle.length; i++) {
    let ele = ddEle[i];
    let val = await ele.getText();
    arr.push(val);
    console.log(val);
  }
  console.log(`>> Options Array: ${arr}`);

  await browser.debug();
});

When(/^select a checkbox$/, async function () {
  /**
 Checkboxes
 * Action:
 1. Select an option
  let ele = await $('//form[@id="checkboxes"]/input[1]');
  await ele.click()

 2. Unselect an option (if selected)
  let ele = await $('//form[@id="checkboxes"]/input[2]');
  await ele.click()

 3. Assert if option is selected
  let ele = await $('//form[@id="checkboxes"]/input[2]');
  if(!await ele.isSelected()){
  await ele.click()

  // this part verify the element and clicks it
  let ele = await $('//form[@id="checkboxes"]/input[2]');
  await ele.click()
  await browser.pause(2000)
  
  //this part verify if the checkbox IS selected =true (pass)
  let isChecked = await ele.isSelected()
  chai.expect(isChecked).to.be.true
  
  // this part verify if the checkbox IS selected =false (fail)
  let isChecked = await ele.isSelected()
  chai.expect(isChecked).to.be.false

 4. select all options
  let eleArr = await $$('//form[@id="checkboxes"]/input');
    for (let i = 0; i < eleArr.length; i++) {
      let ele = eleArr[i]
      if(!await ele.isSelected()) {
        await ele.click()
      }
    }
 */
  let eleArr = await $$('//form[@id="checkboxes"]/input');

  for (let i = 0; i < eleArr.length; i++) {
    let ele = eleArr[i];
    if (!(await ele.isSelected())) {
      await ele.click();
    }
  }

  await browser.debug();
});

When(/^click a link$/, async function () {
  /**
 * Window Handling
 Steps
 1. launch browser
 2. Open another window
  await $('=Click Here').click();
  await $('=Elemental Selenium').click();

 3. Switch to the window based on the title
  let currentWinTitle = await browser.getTitle();
  let parentWinHandle = await browser.getWindowHandle();
  console.log(`>> currentWinTitle: ${currentWinTitle}`);

 4. Switch back to the main window
  let winhandles = await browser.getWindowHandles();
  for (let i = 0; i < winhandles.length; i++) {
    console.log(`>> winHandle: ${winhandles[1]}`);
    await browser.switchToWindow(winhandles[1]);
    currentWinTitle = await browser.getTitle();
    if (
      currentWinTitle ===
      "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"
    ) {
      await browser.switchToWindow(winhandles[1]);
      let headerTxtEleSel = await $("<h1>").getText();
      console.log(`>> headerTxtEleSel: ${headerTxtEleSel}`);
      // rest of the action goes here
      break;
    }
  }
  // can also use "browser.switchWindow()" to either pass text or url
  // switch back to the parent window
  await browser.switchToWindow(parentWinHandle);
  let parentHeadTxt = await $("<h3>").getText();
  console.log(`>> parentHeadTxt: ${parentHeadTxt}`);

 Methods
 1. getTitle
 2. getWindowHandle()
 3. getWindowhandle()
 4. switchToWindow()
 */
  // Open new window
  await $("=Click Here").click();
  await $("=Elemental Selenium").click();
  // stay within the first window
  let currentWinTitle = await browser.getTitle();
  let parentWinHandle = await browser.getWindowHandle();
  console.log(`>> currentWinTitle: ${currentWinTitle}`);

  // command to get all window handles: switch to specific window
  let winhandles = await browser.getWindowHandles();
  for (let i = 0; i < winhandles.length; i++) {
    console.log(`>> winHandle: ${winhandles[1]}`);
    await browser.switchToWindow(winhandles[1]);

    currentWinTitle = await browser.getTitle();
    if (
      currentWinTitle ===
      "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"
    ) {
      await browser.switchToWindow(winhandles[1]);
      let headerTxtEleSel = await $("<h1>").getText();
      console.log(`>> headerTxtEleSel: ${headerTxtEleSel}`);
      // rest of the action goes here
      break;
    }
  }
  // can also use "browser.switchWindow()" to either pass text or url
  // switch back to the parent window
  await browser.switchToWindow(parentWinHandle);
  let parentHeadTxt = await $("<h3>").getText();
  console.log(`>> parentHeadTxt: ${parentHeadTxt}`);

  // continue with the rest of the execution..

  await browser.debug();
});

When(/^click a alert$/, async function () {
  // JS Alert clicking
  // await (await $('button=Click for JS Alert')).click()
  // if (await browser.isAlertOpen()) {
  //   await browser.acceptAlert()
  // }

  // JS Confirm dismiss alert
  // await (await $('button=Click for JS Confirm')).click()
  // if (await browser.isAlertOpen()) {
  //   await browser.dismissAlert()
  //   await browser.pause(2000)
  // }

  // JS Prompt get alert text
  await (await $("button=Click for JS Prompt")).click();
  if (await browser.isAlertOpen()) {
    let alertext = await browser.getAlertText();
    console.log(`>> alertext: ${alertext}`);
    await browser.sendAlertText("Hello JS Prompt...");
    await browser.acceptAlert();
    await browser.pause(2000);
  }
});

// File Upload
When(/^I file upload$/, async function () {
  await $("#file-upload").addValue(
    `${process.cwd()}/data/fileUpload/dummy.txt`
  );
  await $("#file-submit").click();
});

//Frames
/**
 * Methods
 * 1. switchToFrames
 * 2. switchToParentFrames
 *
 * click iframe link -> =iframe
 * enter texts to the field -> #tinymce
 */
When(/^I click iframe then enter text$/, async function () {
  await $("=iFrame").click();
  let ele = await $("#mce_0_ifr");
  await browser.switchToFrame(ele);
  // from the above, we can now interact with the frames

  // --- setValue() will clear the field then enter new text while ---
  // --- addValue will add-to the existing text in the field. ---
  // await $('#tinymce').setValue('Typing text to a frame field...')
  // await browser.switchToParentFrame( )

  // ** select all and then enter text **
  // click on the frame before interacting
  await $("#tinymce").click();
  // keys('Meta') acts like cntrl button and 'A' is All
  await browser.keys(["Meta", "A"]);
  await browser.pause(1000);
  // keys('Delete') acts like the delete action
  await browser.keys("Delete");
  await $("#tinymce").setValue("Typing text to a frame field...");
  await browser.pause(1000);
  await browser.switchToParentFrame();
});

//Basic scrolling
/**
 * Methods
 * 1. scrollIntoView
 */
When(/^I scroll into view$/, async function () {
  await $("h2=Shop books by category").scrollIntoView();
});

When(/^handling web tables$/, async function () {
  /**
   * Web Tables
   * 1. Check number of rows and columns
   * 2. Get whole table data
   * 3. Get single row [based on a condition]
   * 4. Get single column
   * 5. Get single cell value [based on another cell]
   */
  /** 1. Check number of rows and columns */
  let rowCount = await $$(`//table[@id='table1']/tbody/tr`).length;
  chai.expect(rowCount).to.equal(4);
  console.log(`>> Number of rows: ${rowCount}`);
  let colCount = await $$(`//table[@id='table1']/thead/tr/th`).length;
  chai.expect(colCount).to.equal(6);
  console.log(`>> Number of cols: ${colCount}`);

  /** 2. Get whole table data */
  // let arr = []
  // for (let i = 0; i < rowCount; i++){
  //   let personObj = {
  //     lastName: "",
  //     firstName: "",
  //     email: "",
  //     due: "",
  //     webSite: "",
  //   }
  //   for (let j = 0; j < colCount; j++){
  //       let cellVal = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[${j + 1}]`).getText()
  //       if (j === 0)personObj.lastName = cellVal
  //       if (j === 1)personObj.firstName = cellVal
  //       if (j === 2)personObj.email = cellVal
  //       if (j === 3)personObj.due = cellVal
  //       if (j === 4)personObj.webSite = cellVal
  //     }
  //     arr.push(personObj)
  // }
  // console.log(`Whole table: ${JSON.stringify(arr)}`);

  /** 3. Get single row [based on a condition] */
  // let arr = []
  // for (let i = 0; i < rowCount; i++){
  //   let personObj = {
  //     lastName: "",
  //     firstName: "",
  //     email: "",
  //     due: "",
  //     webSite: "",
  //   }
  //   for (let j = 0; j < colCount; j++){
  //       let cellVal = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[${j + 1}]`).getText()
  //       let firstName = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[2]`).getText()
  //       if (firstName === "John"){
  //         if (j === 0)personObj.lastName = cellVal
  //         if (j === 1)personObj.firstName = cellVal
  //         if (j === 2)personObj.email = cellVal
  //         if (j === 3)personObj.due = cellVal
  //         if (j === 4)personObj.webSite = cellVal
  //     }
  //   }
  //   if (personObj.firstName){
  //      arr.push(personObj)
  //   }
  // }
  // console.log(`Whole table: ${JSON.stringify(arr)}`);

  /** 4. Get single column */
  // let arr = []
  // for (let i = 0; i < rowCount; i++) {
  //   let cellVal = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[4]`).getText()
  //   arr.push(cellVal)
  // }
  // console.log(`Single Col values: ${arr}`);

  /** 5. Get single cell value [based on another cell] */
  let arr = [];
  for (let i = 0; i < rowCount; i++) {
    //for (let j = 0; j < colCount; j++) {
      // let cellVal = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[${j + 1}]`).getText();
      let price = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[4]`).getText()
      let firstName = await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[2]`).getText()
      if (+(price.replace("$","")) > 50){
        arr.push(firstName)
      }
    //}
  }
  console.log(`Single Col values: ${arr}`);
});

When(/^I advance scroll the page$/, async function() {
/**
 * Scrolling > Visible portion
 * window object:
 * 1. scrollBy
 * y -> [-]window.innerHeight
 */
// scroll down a little
await browser.execute(() => {
  window.scrollBy(0, window.innerHeight)
})
await browser.pause(2000)
// scroll up a little
await browser.execute(() => {
  window.scrollBy(0, -window.innerHeight)
})
await browser.pause(2000)

/**
 * Invisible Portion
 * window object:
 * 1. scrollTo
 * y -> document.body.scrollTop(scrollHeight)
 */
// scroll all the way down
await browser.execute(() => {
  window.scrollTo(0,document.body.scrollHeight)
})
await browser.pause(2000)
// scroll all the way to the Top
await browser.execute(() => {
  window.scrollTo(0,document.body.scrollTop)
})
await browser.pause(2000)
});

// waitUntil


// ------------------------- Then STEPS -------------------------
Then(/^click on first search result$/, async function () {
  let ele = await $("<h3>");
  ele.click();
});

// waitUntil the browser matches
// Then(/^the url should match (.*)$/, async function (expectedURL) {
//   console.log(">> expectedURL: ${expectedURL}");
//   await browser.waitUntil(async function(){
//     return await browser.getTitle() === "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
//   }, {timeout: 20000, interval: 500, timeoutMsg: `Failed loading WDIO webpage: ${await browser.getTitle()}`})

//   let url = await browser.getUrl();
//   chai.expect(url).to.equal(expectedURL);
// });

// waitUntil element displayed
Then(/^the url should match (.*)$/, async function (expectedURL) {
  console.log(">> expectedURL: ${expectedURL}");
  await browser.waitUntil(async function(){
    return await $('.hero__title').isDisplayed() === true
  }, {timeout: 20000, interval: 500, timeoutMsg: `Element failed to displayed: ${await $('.hero__title').isDisplayed()}`})

  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});

/** how to handle multple element
 *
 */
Then(/^inventory page should list 6 roducts$/, async function () {});
