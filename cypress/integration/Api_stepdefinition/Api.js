import { expect } from 'chai'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import data from '../../fixtures/ApiData.json'
Given('{string} request for {string} Endpoint', (request,endpoint,) => {
    cy.requestWithoutBody(request,endpoint).as('users')
});
Then ('{string} verify status code {int}',(alias,status)=>{
cy.get(alias).its('status').should("be.eq",status)
})
Then("User must be empty",()=>{
    cy.get('@users').then((response)=>{
        expect(response.body).to.be.empty
    });
})
When('check id of body',()=>{
    cy.get('@users').then((response)=>{
        expect(response.body.data.id).be.eq(2)
       })
})
Given("{string} request for {string} Endpoint and pass data of index {int}",(request,endpoint,index)=>{

    cy.requestWithBody(request,endpoint,data[index]).as('body')
})
Then("check for token generated",()=>{
    cy.get('@body').its('body').should('have.property','token')
})

