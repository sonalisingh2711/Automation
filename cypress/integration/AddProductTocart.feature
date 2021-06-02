Feature: Add products to cart
    Scenario Outline: Add product to cart
        Given I am at '<website>' website
        When I select the product in home page
        And I check product in stock and select Feature
        Then I add product to cart
        Examples:
            | website                             |
            | https://shoeshoprunning.fitted.dev/ |
            | https://pacers.fitted.dev/          |

