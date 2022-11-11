import { WebDriver, By, until, WebElement, Builder, Capabilities } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();


export class employeeMan {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
    header: By = By.xpath('//div[@class="titleBar"]')
    addEm: By = By.xpath('//li[@name="addEmployee"]')
    newEm: By = By.xpath('//li[@name="employee11"]')
    emp1: By = By.xpath('//li[@name="employee1"]')
    nameIn: By = By.xpath('//input[@name="nameEntry"]')
    phoneIn: By = By.xpath('//input[@name="phoneEntry"]')
    titleIn: By = By.xpath('//input[@name="titleEntry"]')
    saveBtn: By = By.xpath('//button[@id="saveBtn"]')
    constructor(driver: WebDriver){
        this.driver = driver
    }
    async navigate(){
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.header))
    }
    async click(elementBy: By){
        await this.driver.wait(until.elementLocated(elementBy))
        return (await this.driver.findElement(elementBy)).click()
    }
    async sendKeys(elementBy: By, keys){
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
    async getText(elementBy){
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).getText()
    }
    async setInput(elementBy: By, keys: any):Promise<void>{
        let input = await this.driver.findElement(elementBy)
        await input.click()
        await input.clear()
        await input.sendKeys(keys)
    }

}