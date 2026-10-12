import { test, expect } from "@playwright/test";

test("dashboard loads with sidebar navigation", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Dashboard")).toBeVisible();
  await expect(page.getByRole("link", { name: "Rooms" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Bookings" })).toBeVisible();
});
