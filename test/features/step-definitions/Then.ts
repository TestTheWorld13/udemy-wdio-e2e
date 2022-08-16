import { Then } from "@wdio/cucumber-framework";
import chai from "chai";

Then(/^inventory page should list (.*)$/, async function (NumberOfProducts){
    // IF there is not a valid number, then  throw an error
    if(!NumberOfProducts) throw Error(`Invalid product count provided ${NumberOfProducts}`)
    let eleArr = await $$('.inventory_item_name')
    // 'parseInt' will convert the string into numbers
    chai.expect(eleArr.length).to.equal(parseInt(NumberOfProducts)) // === compare its 'type' and 'value'
});

Then(/^validate all products have valid price$/, async function(){
    
})
