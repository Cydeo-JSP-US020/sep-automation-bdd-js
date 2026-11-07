import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage } from "../../globalPagesSetup.js";

When("user enters card number {string}", async function (cardNumber) {
  await reviewPaymentPage.enterCardNumber(cardNumber);
});

Then(
  "the card number validation message is {string}",
  async function (errorMessage) {
    await expect(reviewPaymentPage.cardNumberErrorMessage).toHaveText(errorMessage);
  }
);


