import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  leftMainPage,
  paymentPlanPage,
  reviewPaymentPage,
  page,
} from "../globalPagesSetup.js";


Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});

Given('user has completed the start application step', async function () {
  await startApplicationPage.enterFirstName("James");
  await startApplicationPage.enterLastName("Bond");
  await startApplicationPage.enterEmail("james@example.com");
  await startApplicationPage.enterPhoneNumber("1234567890");
  await startApplicationPage.selectHowDidYouHearAboutUs("Email");
  await startApplicationPage.clickNextButton();
});


