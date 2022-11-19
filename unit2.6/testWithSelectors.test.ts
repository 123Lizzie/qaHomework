import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html');
    });
    afterAll(async () => {
        await driver.quit();
    });

    const hdrInput: By = By.
    const mkeInput: By = By.
    const oaiInput: By = By.
    const nameInput: By = 
    const clrBtn: By = 
    const submitBtn: By =
    const errorMsg: By = 

    test("Filling in the blanks for real", () => {
        await driver.findElement(hdrInput).sendKeys("");
        await driver.findElement(mkeInput).sendKeys("");
        await driver.findElement(oaiInput).sendKeys("");
        await driver.findElement(nameInput).sendKeys("");
        await driver.findElement(submitBtn).click();
        expect(errorMsg).toContain("Errors Received:");
        await driver.findElement(clrBtn).click();
    });
});