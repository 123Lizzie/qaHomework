import {Builder, By, Capabilities, until, WebDriver} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

class employeePage{
 driver: WebDriver;
 url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
 constructor(driver: WebDriver, url: string){
    this.driver = driver;
    this.url = url;
 };
};

describe("Employee Manager Test", () => {
    beforeEach(async () => {
        await employeePage.navigate();
    });
    afterAll(async () => {
        await driver.quit();
    });
    test("Adding an employee", async () => {
        await driver.wait(until.elementLocated(emPage.header));
        await driver.findElement(emPage.addEmployee).click();
        await driver.findElement(emPage.newEmployee).click();
        await driver.findElement(emPage.nameInput).click();
        await driver.findElement(emPage.nameInput).clear();
        await driver.findElement(emPage.nameInput).sendKeys("Test Name");
        await driver.findElement(emPage.phoneInput).click();
        await driver.findElement(emPage.phoneInput).clear();
        await driver.findElement(emPage.phoneInput).sendKeys("1234567890");
        await driver.findElement(emPage.titleInput).click();
        await driver.findElement(emPage.titleInput).clear();
        await driver.findElement(emPage.titleInput).sendKeys("Title");
    });
});