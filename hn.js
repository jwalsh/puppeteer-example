const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', ...msg.args));

  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle'});
  await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();
})();
