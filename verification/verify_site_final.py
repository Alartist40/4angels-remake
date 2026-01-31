import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})

        # Home Page and Hero Expansion
        await page.goto('http://localhost:8000/index.html')
        await page.wait_for_timeout(1000)
        await page.click('#hero-announcement .toggle-btn')
        await page.wait_for_timeout(1000)
        await page.screenshot(path='verification/home_expanded.png')

        # About Page and Beliefs Expansion
        await page.goto('http://localhost:8000/about.html')
        await page.wait_for_timeout(1000)
        await page.click('#tile-beliefs .toggle-btn')
        await page.wait_for_timeout(1000)
        await page.screenshot(path='verification/about_expanded.png')

        # Publishing Page and Archive Expansion
        await page.goto('http://localhost:8000/publishing.html')
        await page.wait_for_timeout(1000)
        await page.click('#tile-et .toggle-btn')
        await page.wait_for_timeout(1000)
        await page.screenshot(path='verification/publishing_expanded.png')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(verify())
