Feature: verify giftCard Feature

    Scenario Outline: Add Gift Card to cart, and verify on Cart page on <website>
        Given I am at '<website>' website
        When I select 'Gift Cards' category
        When I select the product in home page
        When I enter the amount for gift card
        When I add product to cart
        Then I verify the added product success message
        Examples:
            | website                             |
            | https://shoeshoprunning.fitted.dev/ |
    