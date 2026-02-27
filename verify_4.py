from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating...")
        try:
            page.goto("http://localhost:3000", timeout=60000)
        except Exception as e:
            print(f"Failed to load page: {e}")
            return

        print("Page loaded.")
        print(page.title())

        # Type text (which should trigger a re-render logic, but we need to click Render)
        page.locator("textarea").fill("graph TD\nA-->B")

        # Click Render
        page.get_by_role("button", name="Render").click()

        print("Waiting for SVG (this verifies dynamic import worked)...")
        try:
            # We might need to wait a bit longer for the dynamic import network request
            page.wait_for_selector("svg[id^='mermaid-']", timeout=20000)
            print("SVG found.")
        except:
            print("SVG not found. Taking screenshot anyway.")

        # Screenshot
        page.screenshot(path="verification_4.png", full_page=True)
        browser.close()

if __name__ == "__main__":
    run()
