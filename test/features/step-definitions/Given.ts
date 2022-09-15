import { Given } from "@wdio/cucumber-framework";
import chai from "chai";
import reporter from "../../helper/reporter";
import sauseHomePage from "../../page-objects/sause.home.page";

// Given(/^login to inverntory web app$/, async function () {
//     console.log(`>> Test Username: ${process.env.TEST_USERNAME}`);
//     /** 1. login to inventory web app */
//     // @ts-ignore
//     await browser.url(browser.config.sauceDemoURL);
//     console.log(`>> Test config values: ${JSON.stringify(browser.config)}`);
//     // await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
//     // await browser.maximizeWindow();

//     /** 2. login to web app */
//     await $('#user-name').setValue(process.env.TEST_STD_USERNAME);
//     await $('#password').setValue(process.env.TEST_STD_PASSWORD);
//     await $('#login-button').click();
//     // await browser.keys("Enter");
//   });

// Given(/^login to inverntory web app$/, async function () {
//   /** 1. login to inventory web app */
//   await browser.url("https://www.saucedemo.com/");
//   // await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
//   // await browser.maximizeWindow();

//   /** 2. login to web app */
//     await $('#user-name').setValue('standard_user');
//     await $('#password').setValue('secret_sauce');
//     await $('#login-button').click();
//   // await browser.keys("Enter");
//   /**
//    * Login with another user */
//   // await browser.pause(2000);
//   // await browser.reloadSession();
//   // await browser.url("https://www.saucedemo.com/");
//   // await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
//   // await $('#user-name').setValue('problem_user');
//   // await $('#password').setValue('secret_sauce');
//   // await $('#login-button').click();
//   await browser.debug()
// });

/** Using try/catch */
// Given(/^login to inverntory web app$/, async function () {
//   /** 1. login to inventory web app */
//   await browser.url("https://www.saucedemo.com/");
//   /** 2. login to web app */
//   try {
//     await $('#user-nam').setValue('standard_user');
//     await $('#password').setValue('secret_sauce');
//     await $('#login-button').click();
//   } catch (err) {
//     console.log('Error in first login. Retrying...');
//     await browser.refresh()
//     await browser.pause(2000);
//     await $('#user-name').setValue('standard_user');
//     await $('#password').setValue('secret_sauce');
//     await $('#login-button').click();
//   }
//   // await browser.debug()

// });

/** Using the 'Back' btn and forward btn */
// Given(/^login to inverntory web app$/, async function () {
//   /** 1. login to inventory web app */
//   await browser.url("https://www.saucedemo.com/");
//   /** 2. login to web app */
//   try {
//     await $('#user-name').setValue('standard_user');
//     await $('#password').setValue('secret_sauce');
//     await $('#login-button').click();
//   } catch (err) {
//     console.log('Error in first login. Retrying...');
//     await browser.refresh()
//     await browser.pause(2000);
//     await $('#user-name').setValue('standard_user');
//     await $('#password').setValue('secret_sauce');
//     await $('#login-button').click();
//   }
//   await browser.back()
//   await browser.pause(2000)
//   await browser.forward()
//   await browser.pause(2000)

//   await browser.debug()

// });

Given(
  /^As (a|an) (.*) user I login to inventory web app$/, async function (prefixTxt, userType, dataTable) {
    // reporter.addStep(this.testid, "info", "login to sauce demo");
    //Get the TestID
    // console.log(`>>  Given Steps Test ID: ${this.testid}`);
    // Getting values from data table
    // let dt = dataTable.hashes();
    // console.log(`>> The type of td: ${typeof dt}`); // display object
    // console.log(`>> The type of td: ${dt.constructor}`); // display function Array()
    // console.log(`>> the value of td: ${JSON.stringify(dt)}`);
    // console.log(`>> The userType: ${userType}`);
    // console.log(`>> Test Username: ${process.env.TEST_USERNAME}`);

    /** 1. login to inventory web app */
    // @ts-ignore
    // await browser.url(browser.config.sauceDemoURL);
    // console.log(`>> Test config values: ${JSON.stringify(browser.config)}`);
    // await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    // await browser.maximizeWindow();

    /** login to web app */
    try {
      reporter.addStep(this.testid, "info", "login to sause demo..")
      let dt = dataTable.hashes()
      // @ts-ignore
      await sauseHomePage.navigateTo(browser.config.sauceDemoURL);
      await sauseHomePage.loginToSauseApp(this.testid, process.env.TEST_STD_USERNAME, process.env.TEST_STD_PASSWORD)
      // await $("#user-name").setValue(dt[0].Username);
      // await $("#password").setValue(process.env.TEST_STD_PASSWORD);
      // // await $('#password').setValue('secret_sauce');
      // await $("#login-button").click();
    } catch (err) {
        err.message = `${this.testid}:failed at login step, ${err.message}`
        throw err
      // console.log('Error in first login. Retrying...');
      // await browser.refresh();
      // await browser.pause(2000);
      // await $("#user-name").setValue("standard_user");
      // await $("#password").setValue("secret_sauce");
      // await $("#login-button").click();
    }
    // await browser.keys("Enter");
    // this.appID = "ABC123";
    // reporter.addStep(this.testid, "debug", "Login is Successful...");
  });
