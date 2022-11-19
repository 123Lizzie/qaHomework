import {Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

class emPage{
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
    header: By = By.css(".titleText");
    addEmployee: By = By.name("addEmployee");
    newEmployee: By = By.xpath('//li[text()="New Employee"]');
    nameInput: By = By.name("nameEntry");
    phoneInput: By = By.name("phoneEntry");
    titleInput: By = By.name("titleEntry");
    saveButton: By = By.id("saveBtn");
    constructor(driver: WebDriver, url: string){
       this.driver = driver;
       this.url = url;
    };
    async navigate () {
       await this.driver.get(this.url);
       await this.driver.wait(until.elementLocated(this.header));
    };
    async getElement(elementBy: By): Promise<WebElement> {
       await this.driver.wait(until.elementLocated(elementBy));
       let element = await this.driver.findElement(elementBy);
       await this.driver.wait(until.elementIsVisible(elementBy));
       return element;
    };
    async setInput(elementBy: By, keys: any): Promise<void> {
       let input = await this.getElement(elementBy);
       await input.clear();
       return input.sendKeys(keys);
    };
    async sendKeys(elementBy: By, keys) {
       await this.driver.wait(until.elementLocated(elementBy));
       return driver.findElement(elementBy).sendKeys(keys);
    };
   };

describe("Employee Manager Test", () => {
    beforeEach(async () => {
        await emPage.navigate();
    });
    afterAll(async () => {
        await driver.quit();
    });
    //I have no idea why this isn't working. I thought I did the class correctly, but everything is still red.
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