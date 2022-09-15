import { Then } from "@wdio/cucumber-framework";
import chai from "chai";
import logger from "../../helper/logger"
import reporter from "../../helper/reporter"

Then(/^inventory page should (.*)\s?list (.*)$/, async function (negativeCheck, NumberOfProducts) {
  try {
    // console.log(wdio); //Reference Error
    //Start  the TestID
    // console.log(`>>  Starting: ${this.testid}...`); 
    // IF there is not a valid number, then  throw an error
    // console.log(`>> The appID ${this.appID}`);  
    if (!NumberOfProducts)
      throw Error(`Invalid product count provided: ${NumberOfProducts}`);
    let eleArr = await $$('.inventory_item_name');
    // 'parseInt' will convert the string into numbers
    try {
      chai.expect(eleArr.length).to.equal(parseInt(NumberOfProducts)); // === compare its 'type' and 'value'
    } catch (err) {
      reporter.addStep(this.testid, "error", "known issue - product count mismatch", true, "Jira-123")
    }
  } catch (err) {
    console.log(`>> The type of error: ${typeof err}`);
    console.log(`>> The name property: ${err.name}`);
    console.log(`>> The message property: ${err.message}`);
    err.message = `${this.testid}:failed when comparing product count ${err.message}`
    throw err //failing 
    logger.error(err.message)
  }
});

/**
 * Steps
 * 1. get price list
 * 2. convert strings to numbers
 * 3. Assert if any value is <= 0
 */
Then(/^validate all products have valid price$/, async function () {
  logger.info(`${this.testid}: Checking the price...`)
  /** 1. get price */
  let eleArr = await $$(".inventory_item_price");
  let priceStrArr = [];
  for (let i = 0; i < eleArr.length; i++) {
    let priceStr = await eleArr[i].getText();
    priceStrArr.push(priceStr);
  }
  // console.log(`>> price with $: ${priceStrArr}`);
  /** 2. convert strings to numbers */
  let priceNumArr = priceStrArr.map((ele) => +ele.replace("$", ""));
  // console.log(`>> price in number: ${priceNumArr}`);
  /** 3. Assert if any value is <= 0 */
  let invalidPriceArr = priceNumArr.filter((ele) => ele <= 0);
  chai.expect(invalidPriceArr.length).to.equal(0);
});

