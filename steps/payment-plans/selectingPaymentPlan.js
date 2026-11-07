import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { paymentPlanPage } from "../../globalPagesSetup.js";

function getPaymentPlanFrame(paymentPlan) {
    switch (paymentPlan.toLowerCase()) {
        case "upfront":
            return paymentPlanPage.upfrontPaymentFrame;
        case "installments":
            return paymentPlanPage.installmentsPaymentFrame;
        default:
            throw new Error(`Unsupported payment plan: ${paymentPlan}`);
    }
}

Then("the {string} payment plan is highlighted as selected", async function (paymentPlan) {
    await expect(getPaymentPlanFrame(paymentPlan)).toHaveClass(/plan-selected/);
});

Then("the payment plan next button is enabled for proceeding", async function () {
    await expect(paymentPlanPage.activeNextButton).toBeEnabled();
});

Then("the {string} payment plan is not highlighted as selected", async function (paymentPlan) {
    await expect(getPaymentPlanFrame(paymentPlan)).not.toHaveClass(/plan-selected/);
});