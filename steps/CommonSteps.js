import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
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
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  await startApplicationPage.enterFirstName(firstName);
  await startApplicationPage.enterLastName(lastName);
  await startApplicationPage.enterEmail(`${faker.string.uuid()}@example.com`);
  await startApplicationPage.enterPhoneNumber(faker.string.numeric(10));
  await startApplicationPage.selectHowDidYouHearAboutUs("Email");
  await startApplicationPage.clickNextButton();
});


