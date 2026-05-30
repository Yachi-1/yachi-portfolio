import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  
  page.on('pageerror', err => console.log('ERROR:', err.message));

  await page.goto('http://localhost:5173/projects', { waitUntil: 'networkidle0' });
  
  const projectsToTest = ['herrmann', 'contrarian', 'nellis', 'vegas', 'kinetic', 'remitflow'];
  
  for (const pid of projectsToTest) {
    console.log(`Testing ${pid}...`);
    // refresh to clean state
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    
    // go to projects and click the specific one
    await page.evaluate((pid) => {
      // Find a way to click the specific project.
      // Easiest is just set the route directly but we don't have access to React state.
      // Let's just find the card that has the link or triggers the click.
      // But the cards don't have unique identifiable classes?
      // Wait, let's just click 'Work', then click the one we want.
      const navButtons = document.querySelectorAll('button');
      for (const btn of navButtons) {
        if (btn.innerText.includes('Work')) {
          btn.click();
          break;
        }
      }
    });
    
    await new Promise(r => setTimeout(r, 1000));
    
    await page.evaluate((pid) => {
      // It's a grid. We need to find the specific one.
      // The DropdownItem has the title. Let's just use the DropdownItem since it sets the route.
      // First hover 'Work' so the dropdown shows.
      // Puppeteer mouse hover:
      const navButtons = document.querySelectorAll('button');
      for (const btn of navButtons) {
        if (btn.innerText.includes('Work')) {
          btn.dispatchEvent(new MouseEvent('mouseenter'));
          break;
        }
      }
    });
    
    await new Promise(r => setTimeout(r, 500));
    
    await page.evaluate((pid) => {
      const dropDowns = document.querySelectorAll('button');
      const titles = {
        'herrmann': 'Herrmann',
        'contrarian': 'Contrarian',
        'nellis': 'Nellis',
        'vegas': 'Vegas',
        'kinetic': 'Kinetic',
        'remitflow': 'Remitflow'
      };
      
      for (const btn of dropDowns) {
        if (btn.innerText.includes(titles[pid])) {
          btn.click();
          break;
        }
      }
    }, pid);
    
    await new Promise(r => setTimeout(r, 2000));
  }
  
  await browser.close();
})();
