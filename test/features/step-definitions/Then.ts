import { Then } from "@wdio/cucumber-framework";
import chai from "chai";

Then(/^inventory page should (.*)\s? list(.*)$/, async function (negativeCheck, NumberOfProducts) {
  // IF there is not a valid number, then  throw an error
  if (!NumberOfProducts)
    throw Error(`Invalid product count provided ${NumberOfProducts}`);
  let eleArr = await $$(".inventory_item_name");
  // 'parseInt' will convert the string into numbers
  chai.expect(eleArr.length).to.equal(parseInt(NumberOfProducts)); // === compare its 'type' and 'value'
});

/**
 * Steps
 * 1. get price list
 * 2. convert strings to numbers
 * 3. Assert if any value is <= 0
 */
Then(/^validate all products have valid price$/, async function () {
  /** 1. get price */
  let eleArr = await $$(".inventory_item_price");
  let priceStrArr = [];
  for (let i = 0; i < eleArr.length; i++) {
    let priceStr = await eleArr[i].getText();
    priceStrArr.push(priceStr);
  }
  console.log(`>> price with $: ${priceStrArr}`);
  /** 2. convert strings to numbers */
  let priceNumArr = priceStrArr.map((ele) => +ele.replace("$", ""));
  console.log(`>> price in number: ${priceNumArr}`);
  /** 3. Assert if any value is <= 0 */
  let invalidPriceArr = priceNumArr.filter((ele) => ele <= 0);
  chai.expect(invalidPriceArr.length).to.equal(0);
});

