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


    // it('checkboxdemo ', async () => {
    //     await driver.get('https://www.seleniumeasy.com/test/basic-checkbox-demo.html');
    //     // await driver.findElement(By.xpath("//div[@id='at-cv-lightbox-button-holder']/a[2]")).click();
    //     await driver.findElement(By.xpath("//input[@id='isAgeSelected']")).click();
    //     assert.strictEqual('Success - Check box is checked',await driver.findElement(By.xpath("//div[@id='txtAge']")).getText());
    // },60000);

    it('multiple checkboxdemo ', async () => {
        await driver.get('https://www.seleniumeasy.com/test/basic-checkbox-demo.html');
        // await driver.findElement(By.xpath("//div[@id='at-cv-lightbox-button-holder']/a[2]")).click();
        await driver.findElement(By.xpath("//input[@id='check1']")).click();
        assert.strictEqual('Uncheck All',await driver.findElement(By.xpath("//input[@id='check1']")).getAttribute('value'));
        await driver.findElement(By.xpath("//input[@id='check1']")).click();
        assert.strictEqual('Check All',await driver.findElement(By.xpath("//input[@id='check1']")).getAttribute('value'));
    },60000);
 
});






