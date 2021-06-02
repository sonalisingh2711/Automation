import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import ViewCart from '../UI_PageObject/ViewCartPage'
Then('I verify product image on cart page', () => {
    ViewCart.imageVerification()
});
