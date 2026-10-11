import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage } from "../../globalPagesSetup.js";

Then("the first name and last name fields are text fields", async function () {
    await expect(startApplicationPage.firstNameInputBox).toHaveJSProperty("type", "text");
    await expect(startApplicationPage.lastNameInputBox).toHaveJSProperty("type", "text");
    await expect(startApplicationPage.firstNameInputBox).toHaveValue("");
    await expect(startApplicationPage.lastNameInputBox).toHaveValue("");
});

Then("the email field validates email format", async function () {
    await expect(startApplicationPage.emailInputBox).toHaveAttribute("type", "email");
});

When("user enters non-numeric characters in the phone field", async function () {
    await startApplicationPage.enterPhoneNumber("12abc34");
});

Then("the phone field contains digits only", async function () {
    await expect(startApplicationPage.phoneNumberInputBox).toHaveValue(/^\d*$/);
});

When("user opens the how did you hear about us dropdown", async function () {
    await startApplicationPage.openHowDidYouHearAboutUsDropDown();
});

Then("the standard how did you hear about us options are displayed", async function () {
    await expect(startApplicationPage.howDidYouHearAboutUsOptions).toHaveText([
        "Select One",
        "Email",
        "Facebook",
        "Google",
        "Instagram",
        "LinkedIN",
        "Twitter",
        "Referred by a friend or colleague",
        "Other",
    ]);
});

When("the personal details are in the {string} state", async function (dataState) {
    if (dataState === "invalid email") {
        await startApplicationPage.enterFirstName("Alex");
        await startApplicationPage.enterLastName("Example");
        await startApplicationPage.enterEmail("invalid-email");
        await startApplicationPage.enterPhoneNumber("1234567890");
    } else if (dataState !== "missing required data") {
        throw new Error(`Unsupported personal details state: ${dataState}`);
    }
});

Then("the next button on the start application step is disabled", async function () {
    await expect(startApplicationPage.nextButton).toBeDisabled();
});