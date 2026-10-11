@sep16
Feature: Click on the next button on payment plans page

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed after a payment plan is selected.
    #* AC5: The back button should be displayed and enabled.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        And user has completed the start application step


    #Scenario: Verify that clicking on upfront payment plan should activate the next button
    #    Then the next button on payment plan step is disabled by default
    #    When user clicks on the upfront payment plan
    #    Then the next button on payment plan step is enabled

    #Scenario: Verify that clicking on installments payment plan should activate the next button
    #    Then the next button on payment plan step is disabled by default
    #    When user clicks on the installments payment plan
    #    Then the next button on payment plan step is enabled

    @sep16-1
    Scenario Outline: Verify that clicking on any payment plan should activate the next button
        Then the next button on payment plan step is disabled by default
        When user clicks on the "<payment_plan>" payment plan
        Then the next button on payment plan step is enabled

        Examples:
            | payment_plan |
            | upfront      |
            | installments |

    @sep16-2
    Scenario: Verify that clicking on the next button should navigate to step 3
        When user clicks on the "upfront" payment plan
        And user clicks on the next button of payment plan step
        Then the review step stepper circle should be blue
        And the payment plan step stepper circle should be green
        And the start application step stepper circle should be green

    @sep16-3
    Scenario: Verify that the payment summary is displayed after selecting a payment plan
        When user clicks on the "upfront" payment plan
        Then the upfront payment summary is displayed
        When user clicks on the "installments" payment plan
        Then the installments payment summary is displayed


    @sep16-4
    Scenario: Verify that the back button is displayed and enabled on payment plan step
        Then the back button on payment plan step is displayed
        And the back button on payment plan step is enabled
        When user clicks on the back button of payment plan step
        Then the start application step stepper circle should be blue




