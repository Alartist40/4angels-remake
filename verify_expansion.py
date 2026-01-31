import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto('file:///app/audio.html')

        # Click the first "See List" button
        await page.click('button:has-text("一覧を見る")')
        await page.wait_for_timeout(1000)  # wait for animation

        await page.screenshot(path='audio_expanded.png', full_page=True)

        # Also check mobile
        await page.set_viewport_size({"width": 375, "height": 812})
        await page.screenshot(path='audio_mobile_expanded.png', full_page=True)

        await browser.close()

asyncio.run(run())
