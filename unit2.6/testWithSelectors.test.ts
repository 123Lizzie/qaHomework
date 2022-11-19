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

    const hdrInput: By = By.xpath('//input[@name="hdrInput"]');
    const mkeInput: By = By.xpath('//input[@name="mkeInput"]');
    const oaiInput: By = By.xpath('//input[@name="oriInput"]');
    const nameInput: By = By.xpath('//input[@name="namInput"]');
    const clrBtn: By = By.xpath('//button[@id="clearBtn"]');
    const submitBtn: By = By.xpath('//button[@id="saveBtn"]');
    //I'm still having issues getting this const right.
    const errorMsg: By = By.xpath('//p[alt="is"]');

    test("Filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("Test Header");
        await driver.findElement(mkeInput).sendKeys("Test");
        await driver.findElement(oaiInput).sendKeys("123456789");
        await driver.findElement(nameInput).sendKeys("Test Name");
        await driver.findElement(submitBtn).click();
        expect(errorMsg).toContain("Errors Received:");
        await driver.findElement(clrBtn).click();
    });
});