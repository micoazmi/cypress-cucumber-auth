import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the sign-up page", () => {
  cy.visit("http://localhost:3000/sign-up");
});

When("I fill in the sign-up form with valid details", () => {
  cy.get("#email").clear({ force: true }).type("test@example.com");
  cy.get("#password").clear({ force: true }).type("password123");
});

When("I fill in the sign-up form with invalid details", () => {
  cy.get("#email").clear({ force: true }).type("invalid-email@example.com");
  cy.get("#password").clear({ force: true }).type("short");
});

When("I fill in the sign-up form with email registered", () => {
  cy.get("#email").clear({ force: true }).type("test@example.com");
  cy.get("#password").clear({ force: true }).type("password123");
});

When("I click the submit button", () => {
  cy.get("[data-testid=submit-button]").click();
});

Then("I should see a success popup with {string}", (message) => {
  cy.contains(message).should("be.visible");
});

Then("i should see an error popup {string}", () => {
  cy.contains("Error").should("be.visible");
});

Then("I should see an error popup with {string}", () => {
  cy.contains("Password should be at least 6 characters").should("be.visible");
});
