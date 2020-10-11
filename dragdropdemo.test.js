const { it } = require('@jest/globals');

describe('test simple form', () => {
    const {
        Builder,
        By,
        Key,
        until
    } = require('selenium-webdriver');
    const assert = require('assert');
    var driver;
 
    beforeEach(() => {
        driver = new Builder()
            .forBrowser('firefox')
            .build();
    });
 
    afterEach(() => {
        driver.quit();
    });

    it('drag and drop demo ', async () => {
        await driver.get('https://www.seleniumeasy.com/test/drag-and-drop-demo.html');
        const actions = driver.actions({bridge: true});
        const source = driver.findElement(By.xpath("//span[text()='Draggable 1']"));
        const target = driver.findElement(By.xpath("//div[@id='mydropzone']"));
        await actions.dragAndDrop(source, target).perform();
        const divid = await driver.findElement(By.xpath("//span[text()='Draggable 1']//parent::div")).getAttribute('id');
        assert.strictEqual(divid,'droppedlist');
        // await driver.findElement(By.xpath("//div[@id='at-cv-lightbox-button-holder']/a[2]")).click();
        // await driver.findElement(By.xpath("//input[@id='check1']")).click();
        // assert.strictEqual('Uncheck All',await driver.findElement(By.xpath("//input[@id='check1']")).getAttribute('value'));
        // await driver.findElement(By.xpath("//input[@id='check1']")).click();
        // assert.strictEqual('Check All',await driver.findElement(By.xpath("//input[@id='check1']")).getAttribute('value'));
    },60000);
 
});






