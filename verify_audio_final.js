const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + process.cwd() + '/audio.html');
  await page.setViewportSize({ width: 1280, height: 1600 });
  await page.screenshot({ path: 'audio_final_layout.png', fullPage: true });
  await browser.close();
})();
