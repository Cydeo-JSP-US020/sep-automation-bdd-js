import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  leftMainPage,
  paymentPlanPage,
  reviewPaymentPage,
  page,
} from "../globalPagesSetup.js";
import { faker } from "@faker-js/faker";


Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});
