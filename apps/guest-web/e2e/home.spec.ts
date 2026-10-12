import { test, expect } from "@playwright/test";

test("home page shows guest web heading", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Guest Web" })).toBeVisible();
});
