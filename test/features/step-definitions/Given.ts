import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

// Given(/^login to inverntory web app$/, async function () {
//     /** 1. login to inventory web app */
//     await browser.url("https://www.saucedemo.com/");
//     await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
//     // await browser.maximizeWindow();

//     /** 2. login to web app */
//     await $('#user-name').setValue('standard_user');
//     await $('#password').setValue('secret_sauce');
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
  Given(/^login to inverntory web app$/, async function () {
    /** 1. login to inventory web app */
    await browser.url("https://www.saucedemo.com/");
    /** 2. login to web app */
    try {
      await $('#user-name').setValue('standard_user');
      await $('#password').setValue('secret_sauce');
      await $('#login-button').click();
    } catch (err) {
      console.log('Error in first login. Retrying...');
      await browser.refresh()
      await browser.pause(2000);
      await $('#user-name').setValue('standard_user');
      await $('#password').setValue('secret_sauce');
      await $('#login-button').click();
    }
    await browser.back()
    await browser.pause(2000)
    await browser.forward()
    await browser.pause(2000)

    await browser.debug()

  })