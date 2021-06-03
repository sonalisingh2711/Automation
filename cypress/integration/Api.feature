Feature: testing Api functionality

    Scenario: get request
        Given "GET" request for "/2" Endpoint
        When check id of body
        Then "@users" verify status code 200

    Scenario: delete request
        Given "DELETE" request for "/2" Endpoint
        Then "@users" verify status code 204
        Then User must be empty

    Scenario: Post request
        Given "POST" request for "/users/2" Endpoint and pass data of index 0
        Then "@body" verify status code 201

    Scenario: Put request
        Given "PUT" request for "/users/2" Endpoint and pass data of index 1

    Scenario: Post request
        Given "POST" request for "/login" Endpoint and pass data of index 2
        Then  check for token generated
        
    Scenario: Post request
        Given "POST" request for "/login" Endpoint and pass data of index 3
        Then "@body" verify status code 200








