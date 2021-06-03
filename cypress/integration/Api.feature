Feature: testing Api functionality

    Scenario: get request
        Given I request for get/ users endpoint
        When I check status of get/ to be equal to 200
    Scenario: get request
        Given I request for users endpoint not found
        When I check status of get/ to be equal to 404
    Scenario: create user
        Given I request for post/ users endpoint
        When I check status of post/ to be equal to 201
    Scenario: login user
        Given I request for post/ users endpoint for login with valid credentials
        When I check status of post/ to be equal to 201
     Scenario: login user with invalid credentials
        Given I request for post/ users endpoint for login with invalid credentials
        When I check status of post/ to be equal to 400