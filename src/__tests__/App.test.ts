import puppeteer, { Browser, Page } from "puppeteer";
describe('H1 Text', () => {
  test('h1 loads correctly', async () => {
	let browser = await puppeteer.launch({
	  headless: false
	});
	let page = await browser.newPage();

	page.emulate({
	  viewport: {
		width: 500,
		height: 2400
	  },
	  userAgent: ''
	});

	await page.goto('http://localhost:3000/');
	let html = await page.evaluate(() => document.body.innerHTML);
	expect(html).toContain('soccer');

	browser.close();
  }, 16000);
});
