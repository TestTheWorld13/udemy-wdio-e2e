import {config as baseConfig} from "../wdio.conf"
// import { config as baseConfig } from "../wdio.conf";
export const config = Object.assign(baseConfig, {
  // All test env specific key-value pairs go here
  environment: "TEST",
  sauceDemoURL: "https://www.saucedemo.com",
});
