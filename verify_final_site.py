import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Base directory for screenshots
        base_dir = "/home/jules/verification/final"
        if not os.path.exists(base_dir):
            os.makedirs(base_dir)

        pages = [
            "index.html",
            "about.html",
            "publishing.html",
            "live.html",
            "audio.html",
            "study.html",
            "contact.html"
        ]

        for p_name in pages:
            file_path = f"file://{os.getcwd()}/{p_name}"
            await page.goto(file_path)
            # Desktop view
            await page.set_viewport_size({"width": 1280, "height": 1000})
            await page.screenshot(path=f"{base_dir}/{p_name}_desktop.png")

            # Mobile view
            await page.set_viewport_size({"width": 375, "height": 812})
            await page.screenshot(path=f"{base_dir}/{p_name}_mobile.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
