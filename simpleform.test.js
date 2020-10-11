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


    it('single input field ', async () => {
        await driver.get('https://www.seleniumeasy.com/test/basic-first-form-demo.html');
        await driver.findElement(By.xpath("//div[@id='at-cv-lightbox-button-holder']/a[2]")).click();
        await driver.findElement(By.xpath("//input[@id='user-message']")).sendKeys("viktoria");
        await driver.findElement(By.xpath("//button[@onclick='showInput();']")).click();
        assert.strictEqual('viktoria',await driver.findElement(By.xpath("//span[@id='display']")).getText());
    },60000);

    it('two input fields', async () => {
        await driver.get('https://www.seleniumeasy.com/test/basic-first-form-demo.html');
        await driver.findElement(By.xpath("//input[@id='sum1']")).sendKeys("3");
        await driver.findElement(By.xpath("//input[@id='sum2']")).sendKeys("3");
        await driver.findElement(By.xpath("//button[@onclick='return total()']")).click();
        assert.strictEqual('6',await driver.findElement(By.xpath("//span[@id='displayvalue']")).getText());

    },60000);


 
});
