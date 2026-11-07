import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { leftMainPage, startApplicationPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the Cydeo logo and secure checkout heading are displayed", async function () {
    await expect(leftMainPage.secureCheckoutLogo).toBeVisible();
    await expect(leftMainPage.secureCheckout).toContainText("Secure checkout");
});

Then("the program name is displayed on the landing page", async function () {
    await expect(leftMainPage.programName).toHaveText(productInfo.programName);
});

Then("the left footer displays the logo and policy links in order", async function () {
    await expect(leftMainPage.cydeoImageAtLeftWindow).toBeVisible();
    await expect(leftMainPage.footerElements).toHaveText([
        "",
        "Terms and conditions",
        "Privacy Policy",
        "Disclaimer",
        "Cookie Policy",
    ]);
});

Then("the right footer displays the help contact text", async function () {
    await expect(startApplicationPage.footer).toHaveText(
        "Need help? Contact us at enrollment@cydeo.com"
    );
});