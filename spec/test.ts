import * as assert from 'assert';
//tslint:disable
const browser = require('webdriverio');

describe('webdriver.io page', () => {
  it('should have the right title', async () => {
    await browser.url('https://webdriver.io');
    await console.log("test 1")
    const title = await browser.getTitle();
    console.log("test 2");
    assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
  });
});
