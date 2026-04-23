import { expect, test } from "@playwright/test";

test("desktop smoke: hero, ctas, faq, and proof are functional", async ({
  page,
}) => {
  test.setTimeout(60_000);
  await page.setViewportSize({ width: 1440, height: 1100 });
  await page.goto("/", { waitUntil: "domcontentloaded" });

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.locator("#top").getByRole("link", { name: /get my free preview/i })
  ).toBeVisible();

  await page.getByRole("link", { name: /^offer$/i }).click();
  await expect(page.locator("#offer")).toBeVisible();

  await page
    .locator("#top")
    .getByRole("link", { name: /get my free preview/i })
    .click();
  await expect(page.locator("#contact")).toBeVisible();

  await page.locator("#offer").getByRole("link", { name: /get my free preview/i }).click();
  await expect(page.locator("#contact")).toBeVisible();

  await page.getByRole("link", { name: /simuladormei\.com\.br/i }).click();

  const faqItem = page.getByRole("button", { name: /how much does a website like this cost\?/i });
  await expect(faqItem).toBeVisible();
  await faqItem.click();
  await expect(page.getByText(/\$99\/month after the free first month\./i)).toBeVisible();
  await faqItem.click();

  const overflowing = await page.evaluate(() => {
    const { scrollWidth, clientWidth } = document.documentElement;
    return scrollWidth > clientWidth;
  });
  expect(overflowing).toBe(false);
});

test("mobile smoke: layout stays stable and primary cta remains visible", async ({
  page,
}) => {
  test.setTimeout(60_000);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "domcontentloaded" });

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.locator("#top").getByRole("link", { name: /get my free preview/i })
  ).toBeVisible();

  await page
    .locator("#top")
    .getByRole("link", { name: /get my free preview/i })
    .click();
  await expect(page.locator("#contact")).toBeVisible();

  const mobileCta = page.locator('a[href="#contact"]').last();
  await expect(mobileCta).toBeVisible();

  const overflowing = await page.evaluate(() => {
    const { scrollWidth, clientWidth } = document.documentElement;
    return scrollWidth > clientWidth;
  });
  expect(overflowing).toBe(false);
});
