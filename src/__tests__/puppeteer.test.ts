import puppeteer, { Browser, Page } from 'puppeteer';
import Store from '../stores/store'
let FRONT_URL = process.env.FRONT_URL ? process.env.FRONT_URL : `http://127.0.0.1:3000`;
let browser: Browser;
let page: Page;

beforeAll(async () => {
  browser = await puppeteer.launch({headless: true, executablePath: '/usr/bin/google-chrome', slowMo: 0, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
});

afterAll(async () => {
  await page.close();
  await browser.close();
});

describe(`Testing with puppeteer`, () => {
  test(`Test page loads`, async () => {
    await page.goto(FRONT_URL);
    let html = await page.evaluate(() => document.body.innerHTML);
    expect(html).toContain("sut");
  })
});

describe(`Mobx Runtime Test`, () => {
  test(`Sut is changed to sott`, async () => {
    await page.goto(FRONT_URL);
    let html = await page.evaluate(() => document.body.innerHTML);
    expect(html.toLowerCase()).toContain("sut");
    Store.setSut("sott");
    await page.goto(FRONT_URL);
    let html2 = await page.evaluate(() => document.body.innerHTML);
    expect(html2.toLowerCase()).toContain("sot")
  })
})