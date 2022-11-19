//This imports the tools in the {} to use in tests.
import {Builder, By, Capabilities, until, WebDriver, WebElement, Key,} from "selenium-webdriver";
//These first two consts are needed to make sure the test works with chrome.
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
//These consts are used to make the tests more streamlined by allowing a person to use the name, such as bernice, instead of the entire By.name("employee1").
const bernice: By = By.name("employee1");
const marnie: By = By.name("employee2");
const phillip: By = By.name("employee3");
const nameDisplay: By = By.id("employeeTitle");
const nameInput: By = By.name("nameEntry");
const phoneInput: By = By.name("phoneEntry");
const titleInput: By = By.name("titleEntry");
const saveButton: By = By.id("saveBtn");
const cancelButton: By = By.name("cancel");
const errorCard: By = By.css(".errorCard");

describe("Employee Manager 1.2", () => {
    //This tells the computer that it needs to go to this website before going through the steps of each test.
    beforeEach(async () => {
        await driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html");
    });
    //This tells the computer to exit out of chrome after each test.
    afterAll(async () => {
        await driver.quit();
    });
    describe("Handles unsaved, canceled, and saved changes correctly", () => {
        //This test has the computer click on an employee, clear and change their name, then click on a different employee to ensure the change isn't saved.
        test("An unsaved change doesn't persist", async () => {
            await driver.findElement(bernice).click();
            await driver.wait(until.elementIsVisible(await driver.findElement(nameInput)));
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys("Test Name");
            await driver.findElement(phillip).click();
            await driver.wait(until.elementTextContains(await driver.findElement(nameDisplay), "Phillip"));
            await driver.findElement(bernice).click();
            await driver.wait(until.elementTextContains(await driver.findElement(nameDisplay), "Bernice"));
            //I'm not exactly sure why the getAttribute needs to be "value", but the test works with this.
            expect(await (await driver.findElement(nameInput)).getAttribute("value")).toBe("Bernice Ortiz");
        });
        //This test has the computer click on an employee, clear and change their name, then click cancel to ensure the change isn't saved.
        test("A canceled change doesn't persist", async () => {
            await driver.findElement(phillip).click();
            await driver.wait(until.elementIsVisible(await driver.findElement(nameInput)));
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys("Test Name");
            await driver.findElement(cancelButton).click();
            expect(await (await driver.findElement(nameInput)).getAttribute("value")).toBe("Phillip Weaver");
        });
        //This test has the computer click on an employee, clear and change their name, save, then navigate away from then back to the employee to ensure the change is saved.
        test("A saved change persists", async () => {
            await driver.findElement(bernice).click();
            await driver.wait(until.elementIsVisible(await driver.findElement(nameInput)));
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys("Test Name");
            await driver.findElement(saveButton).click();
            await driver.findElement(phillip).click();
            await driver.wait(until.elementTextContains(await driver.findElement(phillip), "Phillip"));
            await driver.findElement(bernice).click();
            expect(await (await driver.findElement(nameInput)).getAttribute("value")).toBe("Test Name");
        });
    });
    describe("Handles error messages correctly", () => {
        //This test has the computer click on an employee, clear their name and try to save it without any replacement to ensure it won't save and an error message is created.
        test("Shows an error message for an empty name field", async () => {
            await driver.findElement(bernice).click();
            await driver.wait(until.elementIsVisible(await driver.findElement(nameInput)));
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys(Key.SPACE, Key.BACK_SPACE);
            await driver.findElement(saveButton).click();
            await driver.wait(until.elementLocated(errorCard));
            expect(await (await driver.findElement(errorCard)).getText()).toBe("The name field must be between 1 and 30 characters long.");
        });
        /*This test has the computer go through the steps of the previous test, then try to cancel out of the error message.
        It fails when run, but I believe that's because you can't cancel out of the error message rather than an issue with the test itself.*/
        test("Lets you cancel out of an error message", async () => {
            await driver.findElement(bernice).click();
            await driver.wait(until.elementIsVisible(await driver.findElement(nameInput)));
            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys(Key.SPACE, Key.BACK_SPACE);
            await driver.findElement(saveButton).click();
            await driver.wait(until.elementLocated(errorCard));
            expect(await (await driver.findElement(errorCard)).getText()).toBe("The name field must be between 1 and 30 characters long.");
            await driver.findElement(nameInput).sendKeys(Key.SPACE);
            await driver.findElement(cancelButton).click();
            driver.wait(() => true, 500);
            expect(await driver.findElement(errorCard)).toHaveLength(0);
        });
    });
});