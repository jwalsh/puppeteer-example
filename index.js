const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  const url = 'https://example.com';

  console.log(url);
  await page.goto(url);

  console.log(await page.content());
  await page.screenshot({path: 'screenshot.png'});

  await browser.close();

})();
