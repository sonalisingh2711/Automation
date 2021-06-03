import { expect } from 'chai'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import data from '../../fixtures/ApiData.json'
import Url from '../../fixtures/UrlAndEndpoint.json'
Given('I request for get/ users endpoint', () => {
    cy.getRequest(Url.baseUrl + Url.getuser)
})
When('I check status of get/ to be equal to {int}', (status) => {
    cy.checkStatusCodeForGet(status)
})
Given('I request for users endpoint not found', () => {
    cy.getRequest(Url.baseUrl + Url.getuser23)
})
Given('I request for post/ users endpoint', () => {
    cy.postRequest(Url.baseUrl + Url.getuser, data[0])
})
When('I check status of post/ to be equal to {int}', (status) => {
    cy.checkStatusCodeForPost(status)
})
Given('I request for post/ users endpoint for login with valid credentials', () => {
    cy.postRequest(Url.baseUrl + Url.login, data[2])
})
Given('I request for post/ users endpoint for login with invalid credentials', () => {
    cy.postRequest(Url.baseUrl + Url.login, data[3])
})

