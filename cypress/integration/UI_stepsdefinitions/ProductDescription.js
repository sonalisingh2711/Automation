import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import ProductDescription from '../UI_PageObject/ProductDescriptionPage'
When('I enter the amount for gift card', () => {
    ProductDescription.giftCardAmount()
});

When('I add product to cart', () => {
    ProductDescription.addToCart()
});

Then('I verify the added product success message', () => {

    ProductDescription.verifySuccessProductMessage()
});

Then('I verify the images on product description page', () => {
    ProductDescription.imageVerification()
});


When('I click on view cart button', () => {
    ProductDescription.viewCart()
});
And('I check product in stock and select Feature',()=>{
    ProductDescription.checkProductInStock()
})