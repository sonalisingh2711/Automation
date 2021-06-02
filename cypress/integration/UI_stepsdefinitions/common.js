import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
Given('I am at {string} website', (website) => {
    cy.visit(website)
});