import {Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

import {employeeManagerPg} from "./employeeManagerPage";
const emPage = new employeeManagerPg(driver);

describe("Employee Manager Test", () => {
    beforeEach(async () => {
        await emPage.navigate();
    });
    afterAll(async () => {
        await emPage.driver.quit();
    });
    
    test("Adding an employee", async () => {
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
        await driver.findElement(emPage.saveButton).click();
    });
});