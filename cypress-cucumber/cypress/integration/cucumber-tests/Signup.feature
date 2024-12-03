Feature: Sign Up

    Scenario: User submits the sign-up form successfully
        Given I am on the sign-up page
        When I fill in the sign-up form with valid details
        And I click the submit button
        Then I should see a success popup with "Sign up succeed"


    Scenario: User submits the sign-up form with invalid details
        Given I am on the sign-up page
        When I fill in the sign-up form with invalid details
        And I click the submit button
        Then I should see an error popup with "Password should be at least 6 characters"

    Scenario: User submits the sign-up with the same email registered
        Given I am on the sign-up page
        When I fill in the sign-up form with email registered
        And I click the submit button
        Then i should see an error popup "Error (auth/email-already-in-use)"
