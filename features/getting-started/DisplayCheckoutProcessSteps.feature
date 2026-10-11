@sep08
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.

    Background:
        Given user is on the enrollment page

    @sep08-1
    Scenario: Verify the checkout steps are listed in sequence
        Then the start application title is displayed as "Start Application"
        And the payment plan title is displayed as "Payment plan"
        And the review title is displayed as "Review"
        And the step number 1 is displayed for the start application step
        And the step number 2 is displayed for the payment plan step
        And the step number 3 is displayed for the review step

    @sep08-2
    Scenario: Verify the start application step is highlighted in blue
        Then the start application step circle should be blue

    @sep08-3
    Scenario: Verify the payment plan and review steps are displayed in grey
        Then the payment plan step circle should be grey
        And the review step circle should be grey