import puppeteer from "puppeteer";

describe("start pages", () => {
  let browser;
  let page;
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
    });

    page = await browser.newPage();

  })

  test('popover unvisible', async () => {
    await page.goto('http://localhost:8080');
    const popover = await page.$('.popover')
    expect(popover).toEqual(null);
  });

  test('popover visible', async () => {
    await page.goto('http://localhost:8080');
    const form = await page.$('form');
    const resetBtn = await form.$('button[type=reset]');
    const submitBtn = await form.$('button[type=submit]');
    await resetBtn.click();
    await page.waitForSelector('.popover', {visible: true});
    await submitBtn.click();
    const popover = await page.$('.popover')
    expect(popover).toEqual(null);
  });

  afterEach(async () => {
    await browser.close();
  });

});