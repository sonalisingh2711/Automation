import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Home from '../UI_PageObject/HomePage'
When('I select {string} category', (checkboxCategory) => {
    Home.checkBoxSelection(checkboxCategory)
});

When('I select the product in home page', () => {
    Home.selectProduct()
});

Then('I verify the product images on home page', () => {
    Home.imageVerification()
});



