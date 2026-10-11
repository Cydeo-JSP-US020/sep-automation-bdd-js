import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page, startApplicationPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Then('the next button on payment plan step is disabled by default', async function () {
    await expect(paymentPlanPage.inactiveNextButton).toBeVisible();
});

When('user clicks on the {string} payment plan', async function (string) {
    await paymentPlanPage.selectPaymentPlan(string);
});

Then('the next button on payment plan step is enabled', async function () {
    await expect(paymentPlanPage.activeNextButton).toBeVisible();
});

When('user clicks on the next button of payment plan step', async function () {
    await paymentPlanPage.clickNextButton();
});

Then('the review step stepper circle should be blue', async function () {
    await expect(startApplicationPage.reviewStepCircle).toHaveCSS("background-color", "rgb(1, 201, 255)");
});

Then('the payment plan step stepper circle should be green', async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS("background-color", "rgb(172, 245, 138)");
});

Then('the start application step stepper circle should be green', async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS("background-color", "rgb(172, 245, 138)");
});


Then('the upfront payment summary is displayed', async function () {
    await expect(paymentPlanPage.basePriceAmountUnderUpfront).toBeVisible();
    await expect(paymentPlanPage.upfrontDiscountAmountUnderUpfront).toBeVisible();
    await expect(paymentPlanPage.subtotalAmountUnderUpfront).toBeVisible();
});

Then('the installments payment summary is displayed', async function () {
    await expect(paymentPlanPage.basePriceAmountUnderInstallments).toBeVisible();
    await expect(paymentPlanPage.installmentsNumberUnderInstallments).toBeVisible();
    await expect(paymentPlanPage.pricePerInstallmentsAmountUnderInstallments).toBeVisible();
    await expect(paymentPlanPage.firstMonthPaymentAmountUnderInstallments).toBeVisible();
});

Then('the back button on payment plan step is displayed', async function () {
    await expect(paymentPlanPage.backButton).toBeVisible();
});

Then('the back button on payment plan step is enabled', async function () {
    await expect(paymentPlanPage.backButton).toBeEnabled();
});

When('user clicks on the back button of payment plan step', async function () {
    await paymentPlanPage.backButton.click();
});

Then('the start application step stepper circle should be blue', async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS("background-color", "rgb(1, 201, 255)");
});