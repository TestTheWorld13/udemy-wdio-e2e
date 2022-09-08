import { setWorldConstructor } from "@wdio/cucumber-framework";
import chai from "chai";

class CustomWorld{
    appId: String
    constructor(){
        this.appId = ""
    }
}
setWorldConstructor(CustomWorld)