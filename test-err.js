import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));
  
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  
  console.log('Navigating to projects...');
  await page.evaluate(() => {
    // find projects link in nav
    const links = document.querySelectorAll('button');
    for (const link of links) {
      if (link.innerText.toLowerCase().includes('projects')) {
        link.click();
      }
    }
  });
  await new Promise(r => setTimeout(r, 1000));
  
  console.log('Clicking a project...');
  await page.evaluate(() => {
    const cards = document.querySelectorAll('[data-cursor="view"]');
    if (cards.length > 0) cards[0].click();
  });
  
  await new Promise(r => setTimeout(r, 2000));
  await browser.close();
})();
