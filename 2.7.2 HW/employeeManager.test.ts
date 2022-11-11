import { WebDriver, By, until, WebElement, Builder, Capabilities } from "selenium-webdriver";

const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

import { employeeMan } from "./employeePO";

const empMan = new employeeMan(driver);

describe("Homework tests", ()=>{
    beforeEach(async ()=>{
        await empMan.navigate()
    });
    afterAll(async ()=>{
        await empMan.driver.quit()
    });

    test("Add new employee", async()=>{
        await empMan.click(empMan.addEm);
        await empMan.click(empMan.newEm);
        await empMan.setInput(empMan.nameIn, "Dame Maggie Smith");
        await empMan.setInput(empMan.phoneIn, "9015555555");
        await empMan.setInput(empMan.titleIn, "Head BIC, everyone knows it")
        await empMan.click(empMan.saveBtn)
    })

    test("Edit employee", async()=>{
        await empMan.click(empMan.emp1);
        await empMan.setInput(empMan.nameIn, "Cal Kestis");
        await empMan.setInput(empMan.phoneIn, "2222220000");
        await empMan.setInput(empMan.titleIn, "Jedi Knight probs")
        await empMan.click(empMan.saveBtn)
    })
})