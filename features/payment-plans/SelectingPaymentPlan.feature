@sep14
Feature: Selecting a price plan

    As a customer, I want to be able to Choose a payment plan from the available options 
    so that I can choose the one that best suits my needs.

    #* AC1: When the user selects any payment plan (Accordion) that option should be highlighted to indicate selection.
    #* AC2: Upon selecting any pricing option, the 'Next' button should become active (indicating the user can proceed).
    #* AC3: Users should be able to change their plan selections at any time before finalizing their choice.


    Background:
        Given user is on the enrollment page
        And user has completed the start application step

    @sep14-1
    Scenario Outline: Verify a selected payment plan is highlighted
        When user clicks on the "<payment_plan>" payment plan
        Then the "<payment_plan>" payment plan is highlighted as selected

        Examples:
            | payment_plan |
            | upfront      |
            | installments |

    @sep14-2
    Scenario Outline: Verify selecting a payment plan activates the next button
        When user clicks on the "<payment_plan>" payment plan
        Then the payment plan next button is enabled for proceeding

        Examples:
            | payment_plan |
            | upfront      |
            | installments |

    @sep14-3
    Scenario: Verify the customer can change the selected payment plan
        When user clicks on the "upfront" payment plan
        And user clicks on the "installments" payment plan
        Then the "installments" payment plan is highlighted as selected
        And the "upfront" payment plan is not highlighted as selected