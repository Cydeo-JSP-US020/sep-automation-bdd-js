import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { paymentPlanPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

const activePrices = productInfo.prices.filter((price) => price.active);

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

Then(
  "exactly one upfront payment option displays the expected pay-once price",
  async function () {
    const upfrontPrice = activePrices.find((price) => price.type === "one-time");
    if (!upfrontPrice) {
      throw new Error("No active upfront payment plan is configured in qa_data.json");
    }

    const discountedAmount = upfrontPrice.upfrontDiscount
      ? upfrontPrice.baseAmount - upfrontPrice.upfrontDiscountAmount
      : upfrontPrice.baseAmount;

    await expect(paymentPlanPage.upfrontPaymentOption).toHaveCount(1);
    await expect(paymentPlanPage.upfrontPaymentOption).toHaveText("Upfront");
    await expect(paymentPlanPage.upfrontPaymentAmount).toContainText(
      formatCurrency(discountedAmount)
    );
    await expect(paymentPlanPage.payOnceTextUpFront).toHaveText("pay once");
  }
);

Then(
  "available payment plans and installment details match the product data",
  async function () {
    const installmentPrices = activePrices.filter(
      (price) => price.type === "recurring" && price.numberOfInstallments
    );

    await expect(paymentPlanPage.paymentPlanBoxes).toHaveCount(activePrices.length);

    const planHeaders = (await paymentPlanPage.paymentPlanBoxes.allTextContents()).map(
      (text) => text.replace(/\s+/g, " ").trim()
    );
    expect(new Set(planHeaders).size).toBe(planHeaders.length);

    if (installmentPrices.length === 0) {
      return;
    }

    const installmentHeaders = paymentPlanPage.paymentPlanBoxes.filter({
      hasText: "Installments",
    });
    await expect(installmentHeaders).toHaveCount(installmentPrices.length);
    await expect(installmentHeaders).toHaveText(
      installmentPrices.map(
        ({ numberOfInstallments }) =>
          new RegExp(`${numberOfInstallments}\\s+Installments`)
      )
    );
    await expect(paymentPlanPage.installmentsPaymentAmount).toContainText(
      installmentPrices.map(({ baseAmount, numberOfInstallments }) =>
        formatCurrency(baseAmount / numberOfInstallments)
      )
    );
    await expect(paymentPlanPage.perMonthTextInstallments).toHaveText(
      installmentPrices.map(() => "per month")
    );
  }
);
