import * as puppeteer from 'puppeteer';

let browser: puppeteer.Browser;
let page: puppeteer.Page;

beforeAll( async () => {
    browser = await puppeteer.launch({headless: true});
    page = await browser.newPage();
})


describe("Puppeteer test", () => {
    test("Pinging sutte-frontend", async () => {
        await page.goto('http://localhost:3000');
        let html = await page.evaluate(() => document.body.innerHTML);
        expect(html).toContain("Sut");
        await browser.close();
    })
})