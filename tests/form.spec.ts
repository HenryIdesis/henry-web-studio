import { expect, test } from "@playwright/test";

test("lead form submits successfully", async ({ page }) => {
  test.setTimeout(60_000);
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");

  const contact = page.locator("#contact");
  await contact.scrollIntoViewIfNeeded();

  const form = page.locator("#contact form");
  await expect(form).toBeVisible();

  await form.getByLabel("Name").fill("John Smith");
  await form.getByLabel("Business").fill("Smith Plumbing");
  await form.getByLabel("Email").fill("john@example.com");
  await form.getByLabel("Website").fill("https://smithplumbing.com");
  await form.getByLabel("What do you need?").fill("Need a better site.");

  const submit = form.getByRole("button", { name: /get my free preview/i });
  const response = await Promise.all([
    page.waitForResponse((res) => {
      const url = new URL(res.url());
      return url.pathname === "/api/lead" && res.request().method() === "POST";
    }),
    submit.click(),
  ]).then(([res]) => res);

  expect([200, 303]).toContain(response.status());
});
