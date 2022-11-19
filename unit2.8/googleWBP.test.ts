import {Google} from "./googleBP";
import {Driver} from "selenium-webdriver/chrome";
const fs = require("fs");
const google = new Google();

test("do a search", async () => {
    await google.navigate();
    await google.search("Almond Joy");
    await fs.writeFile(`${__dirname}/google.png`, 
    await google.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.error(e);
        else console.log("Save Successful");
    });
    fs.writeFile(`${__dirname}/test.txt`, text, (e) => {
        if (e) console.error(e);
        else console.log("Save Successful");
    });
});
afterAll(async () => {
    await google.driver.quit();
});