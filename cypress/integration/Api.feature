Feature: testing Api functionality

    Scenario: get request
    When I request for List users Endpoint
    And Check Status code
    And I check first-name
    Scenario: post request
    When I request for create user Endpoint
    Then check user is created
    Scenario: check user credentials
    Given login user
    Scenario: Update user
    When I request for list user Endpoint
    Then check user is updated or not
    Scenario:delete user
    When I request for api and delete user