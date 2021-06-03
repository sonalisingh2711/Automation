// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getRequest', (geturl) => {
  cy.request({
    method: "GET",
    url: geturl,
    failOnStatusCode: false
  }).as('getrequest')
})
Cypress.Commands.add('checkStatusCodeForGet', (status) => {
  cy.get('@getrequest').its('status').should('be.eq', status)
})
Cypress.Commands.add('postRequest', (posturl, user) => {
  cy.request({
    method: "POST",
    url: posturl,
    failOnStatusCode: false,
    body: {user}
  }).as('postrequest')
})
Cypress.Commands.add('checkStatusCodeForPost', (status) => {
  cy.get('@postrequest').its('status').should('be.eq', status)
})