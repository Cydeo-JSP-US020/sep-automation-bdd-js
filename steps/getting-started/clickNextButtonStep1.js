import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage } from "../../globalPagesSetup.js";

When("user enters all required personal details", async function () {
    await startApplicationPage.enterFirstName("James");
    await startApplicationPage.enterLastName("Bond");
    await startApplicationPage.enterEmail("james.bond@example.com");
    await startApplicationPage.enterPhoneNumber("1234567890");
    await startApplicationPage.selectHowDidYouHearAboutUs("Email");
});

When("user enters only the required personal details", async function () {
    await startApplicationPage.enterFirstName("James");
    await startApplicationPage.enterLastName("Bond");
    await startApplicationPage.enterEmail("james.bond@example.com");
    await startApplicationPage.enterPhoneNumber("1234567890");
});

When("user clicks on the next button on step 1", async function () {
    await startApplicationPage.clickNextButton();
});

Then("the payment plan step is the active blue step", async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS("background-color", "rgb(1, 201, 255)");
});

Then("the start application step is marked complete in green", async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS("background-color", "rgb(172, 245, 138)");
});

