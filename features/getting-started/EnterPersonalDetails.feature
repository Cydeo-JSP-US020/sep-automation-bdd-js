@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.

    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    Background:
        Given user is on the enrollment page

    @sep10-1
    Scenario: Verify the personal detail fields have the expected types and phone accepts digits only
        Then the first name and last name fields are text fields
        And the email field validates email format
        When user enters non-numeric characters in the phone field
        Then the phone field contains digits only

    @sep10-2
    Scenario: Verify the how did you hear about us dropdown options
        When user opens the how did you hear about us dropdown
        Then the standard how did you hear about us options are displayed

    @sep10-3
    Scenario Outline: Verify the next button is disabled for missing or invalid required data
        When the personal details are in the "<data_state>" state
        Then the next button on the start application step is disabled

        Examples:
            | data_state          |
            | missing required data |
            | invalid email         |