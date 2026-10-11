@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields

    Background:
        Given user is on the enrollment page

    @sep19-1
    Scenario: Verify that the next button takes the customer to step 2 when all fields are completed
        When user enters all required personal details
        And user clicks on the next button on step 1
        Then the payment plan step is the active blue step
        And the start application step is marked complete in green

    @sep19-2
    Scenario: Verify that the next button takes the customer to step 2 when only required fields are completed
        When user enters only the required personal details
        And user clicks on the next button on step 1
        Then the payment plan step is the active blue step
        And the start application step is marked complete in green