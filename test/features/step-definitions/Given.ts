import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^login to inverntory web app$/, async function () {
    /** 1. login to inventory web app */
    await browser.url("https://www.saucedemo.com/");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    // await browser.maximizeWindow();

    /** 2. login to web app */
    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('#login-button').click();
    // await browser.keys("Enter");
  });
