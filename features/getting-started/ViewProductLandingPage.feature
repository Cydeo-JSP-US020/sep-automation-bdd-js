@sep07
Feature: View Product Landing Page

    As a customer, I should be able to see the product landing page.

    #* AC1: The system displays the text "Cydeo Secure Checkout".
    #* AC2: The system should display the program name.
    #* AC3: Users should see a footer on the left side of the page that includes by order: 
    #*      logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy
    
    #* AC4: The system displays "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.


    Background:
        Given user is on the enrollment page

    @sep07-1
    Scenario: Verify the Cydeo Secure Checkout branding is displayed
        Then the Cydeo logo and secure checkout heading are displayed

    @sep07-2
    Scenario: Verify the program name is displayed
        Then the program name is displayed on the landing page

    @sep07-3
    Scenario: Verify the left footer displays its items in the required order
        Then the left footer displays the logo and policy links in order

    @sep07-4
    Scenario: Verify the right footer displays the help contact
        Then the right footer displays the help contact text

