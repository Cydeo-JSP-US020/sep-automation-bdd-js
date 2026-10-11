import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { leftMainPage, page, startApplicationPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the product name is displayed on the information card", async function () {
    await expect(startApplicationPage.programNameOnInfoCard).toContainText(productInfo.programName);
});

Then("the product name on the information card matches the left-side program name", async function () {
    const cardName = await startApplicationPage.programNameOnInfoCard.textContent();
    const leftName = await leftMainPage.programName.textContent();
    await expect(cardName?.trim()).toBe(leftName?.trim());
});

Then("the product price is displayed on the information card", async function () {
    const expectedPrice = `$${productInfo.prices[0].baseAmount - productInfo.prices[0].upfrontDiscountAmount}`;
    await expect(startApplicationPage.programPrice).toContainText(expectedPrice);
});

Then("the flexible payments text is displayed", async function () {
    await expect(startApplicationPage.flexiblePaymentsPlanAvailableText).toHaveText("Flexible payments plan available");
});

Then("the program start date is displayed on the information card", async function () {
    await expect(startApplicationPage.programStartDate).toContainText(productInfo.startDate);
});

Then("the return policy and final return date are displayed", async function () {
    await expect(page.getByText("100% refund policy")).toBeVisible();
    await expect(startApplicationPage.refundEndDate).toContainText(productInfo.refundDate);
});
