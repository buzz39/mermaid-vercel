
import asyncio
from playwright.async_api import async_playwright, expect

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # 1. Navigate to home
        print("Navigating to home page...")
        await page.goto("http://localhost:3000")
        await page.wait_for_selector("h1")

        # 2. Verify new pages links in footer
        print("Verifying footer links...")
        await expect(page.get_by_role("link", name="About")).to_be_visible()
        await expect(page.get_by_role("link", name="Privacy")).to_be_visible()
        await expect(page.get_by_role("link", name="Terms")).to_be_visible()

        # 3. Verify Toolbar new features
        print("Verifying Toolbar features...")
        # Check Share button
        await expect(page.get_by_role("button", name="Share")).to_be_visible()
        # Check Examples dropdown
        await expect(page.get_by_role("combobox", name="Examples")).to_be_visible()

        # 4. Select an example
        print("Selecting 'Sequence Diagram' example...")
        await page.get_by_role("combobox", name="Examples").select_option("sequence")

        # Allow some time for state update and re-render
        await page.wait_for_timeout(2000)

        # 5. Verify text area updated (simple check)
        content = await page.get_by_role("textbox").input_value()
        if "sequenceDiagram" not in content:
             print(f"Error: Text area did not update. Content: {content[:50]}...")
        else:
             print("Text area updated successfully.")

        # 6. Verify AdUnit presence
        print("Verifying AdUnit placeholders...")
        # There should be at least one "Advertisement" text from the AdUnit component
        await expect(page.get_by_text("Advertisement").first).to_be_visible()

        # 7. Take screenshot
        print("Taking screenshot...")
        await page.screenshot(path="verification_screenshot.png", full_page=True)

        await browser.close()
        print("Verification complete.")

if __name__ == "__main__":
    asyncio.run(run())
