import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open login page", () => {
  cy.visit("http://localhost:3000/sign-up");
});
