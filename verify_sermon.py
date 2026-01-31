import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        path = os.path.abspath("audio.html")
        await page.goto(f"file://{path}")
        await page.set_viewport_size({"width": 1280, "height": 800})
        await page.screenshot(path="verify_sermon_redesign.png", full_page=True)
        # Test expansion
        await page.click('button[data-target="list-worship"]')
        await page.wait_for_timeout(500)
        await page.screenshot(path="verify_sermon_expanded.png", full_page=True)
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
