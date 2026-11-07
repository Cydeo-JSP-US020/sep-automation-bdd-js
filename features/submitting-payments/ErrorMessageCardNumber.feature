@sep25
Feature: Error message for the invalid card number

    As a user, I want to be informed when my card info has failed.

    #* AC1: An immediate error message should be thrown if the card number is wrong or too short:
    #*              Your card number is incomplete.
    #*              Your card number is invalid.

    Background:
        Given user is on the enrollment page
        And user has completed the start application step
        When user clicks on the "upfront" payment plan
        And user clicks on the next button of payment plan step

    @sep25-1
    Scenario Outline: Show immediate card-number validation messages
        When user enters card number "<card_number>"
        Then the card number validation message is "<error_message>"

        Examples:
            | card_number          | error_message                   |
            | 4242                 | Your card number is incomplete. |
            | 4242 4242 4242 4241  | Your card number is invalid.    |

