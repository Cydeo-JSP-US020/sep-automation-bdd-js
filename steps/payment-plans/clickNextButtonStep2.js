import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page, startApplicationPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";



Then('the next button on payment plan step is disabled by default', async function () {
});

When('user clicks on the {string} payment plan', async function (string) {
});

Then('the next button on payment plan step is enabled', async function () {
});

When('user clicks on the next button of payment plan step', async function () {
});

Then('the review step stepper circle should be blue', async function () {
});

Then('the payment plan step stepper circle should be green', async function () {
});

Then('the start application step stepper circle should be green', async function () {
});

Then('the upfront payment summary is displayed', async function () {
});

Then('the installments payment summary is displayed', async function () {
});

Then('the back button on payment plan step is displayed', async function () {
});

Then('the back button on payment plan step is enabled', async function () {
});

When('user clicks on the back button of payment plan step', async function () {
});

Then('the start application step stepper circle should be blue', async function () {
});