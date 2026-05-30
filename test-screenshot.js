import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  page.on('console', msg => console.log('LOG:', msg.text()));
  page.on('pageerror', err => console.log('ERROR:', err.message));

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  
  console.log('Clicking Work (Projects)...');
  await page.evaluate(() => {
    const buttons = document.querySelectorAll('button');
    for (const btn of buttons) {
      if (btn.innerText.includes('Work')) {
        btn.click();
        break;
      }
    }
  });
  
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path: 'projects-page.png'});
  
  console.log('Clicking first project card...');
  await page.evaluate(() => {
    const cards = document.querySelectorAll('[data-cursor="view"]');
    if (cards.length > 0) cards[0].click();
  });
  
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({path: 'after-click.png'});
  
  await browser.close();
})();
