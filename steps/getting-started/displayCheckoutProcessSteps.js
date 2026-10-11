import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage } from "../../globalPagesSetup.js";

Then("the start application title is displayed as {string}", async function (title) {
    await expect(startApplicationPage.startApplicationText).toHaveText(title);
});

Then("the payment plan title is displayed as {string}", async function (title) {
    await expect(startApplicationPage.paymentPlanText).toHaveText(title);
});

Then("the review title is displayed as {string}", async function (title) {
    await expect(startApplicationPage.reviewText).toHaveText(title);
});

Then("the step number {int} is displayed for the start application step", async function (stepNumber) {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveText(String(stepNumber));
});

Then("the step number {int} is displayed for the payment plan step", async function (stepNumber) {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveText(String(stepNumber));
});

Then("the step number {int} is displayed for the review step", async function (stepNumber) {
    await expect(startApplicationPage.reviewStepCircle).toHaveText(String(stepNumber));
});

Then("the start application step circle should be blue", async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS("background-color", "rgb(1, 201, 255)");
});

Then("the payment plan step circle should be grey", async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS("color", "rgb(217, 226, 236)");
});

Then("the review step circle should be grey", async function () {
    await expect(startApplicationPage.reviewStepCircle).toHaveCSS("color", "rgb(217, 226, 236)");
});