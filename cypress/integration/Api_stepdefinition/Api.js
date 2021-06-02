import { expect } from 'chai'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import data from '../../fixtures/ApiData.json'
When('I request for List users Endpoint',()=>{
    cy.request('/api/users?page=2').as('listUser')
})
And('Check Status code',()=>{
    cy.get('@listUser').its('status').should('be.eq',200)
})
And('I check first-name',()=>{
    cy.get('@listUser').then((response)=>{
     expect(response.body.data[0].id).be.eq(7)
    })
})
When('I request for create user Endpoint',()=>{
cy.request('POST','api/users',data[0]).as('create')
})
Then('check user is created',()=>{
cy.get('@create').its('body.name').should('be.eq',data[0].name)
})
Given('login user',()=>{
cy.login()
})
When('I request for list user Endpoint',()=>{
cy.request('PUT','api/users/2',data[1]).as('response')
})
Then('check user is updated or not',()=>{
    cy.get('@response').its("status").should('be.eq',200)
    cy.get("@response").its('body.job').should("be.eq",data[1].job)
})
When('I request for api and delete user',()=>{
    cy.request('DELETE','api/users/2')
})
