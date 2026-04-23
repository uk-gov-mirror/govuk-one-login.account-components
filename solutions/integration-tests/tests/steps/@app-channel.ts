import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { bdd } from "./fixtures.js";

const { Given, Then } = bdd;

Then("the phase banner does not show", async ({ page }) => {
  await expect(page.locator(".govuk-phase-banner")).not.toBeVisible();
});

Then(
  "a 'govuk-template__mobile' class is applied to the document",
  async ({ page }) => {
    await expect(page.locator("html.govuk-template__mobile")).toBeAttached();
  },
);

Then("the footer does not show", async ({ page }) => {
  await expect(page.locator("footer")).not.toBeVisible();
});

Then("the GOVUK logo is not a link", async ({ page }) => {
  await expect(
    page.locator("a.govuk-header__link--homepage"),
  ).not.toBeVisible();
});

Then("the phase banner shows", async ({ page }) => {
  await expect(page.locator(".govuk-phase-banner")).toBeVisible();
});

Then(
  "a 'govuk-template__mobile' class is not applied to the document",
  async ({ page }) => {
    await expect(
      page.locator("html.govuk-template__mobile"),
    ).not.toBeAttached();
  },
);

Then("the footer shows", async ({ page }) => {
  await expect(page.locator("footer")).toBeVisible();
});

Then("the GOVUK logo is a link", async ({ page }) => {
  await expect(page.locator("a.govuk-header__link--homepage")).toBeVisible();
});
