import { BasePage } from "./BasePage.js";

export class LeftMainPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.cydeoImageAtLeftWindow = page.locator(
      "(//img[@src = 'assets/images/logo.svg'])[2]"
    );

    this.secureCheckout = page.locator("//p[@class='checkout-title']");

    this.secureCheckoutLogo = this.secureCheckout.locator(
      "img[src='assets/images/logo.svg']"
    );

    this.footerElements = page.locator(".details-footer a");

    this.programName = page.locator("//p[@class='course-name']/a");
    
  }

  
}
