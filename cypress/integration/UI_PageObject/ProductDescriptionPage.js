
import constantValues from '../../fixtures/constantValues.json'
import Home from './HomePage'
const _verificationMessage = 'i+span'
const _viewCartButton = '//a//*[text()="View Cart"]'
const _giftCardAmount = "input.input-text.amount"
const _addToCart = "button.single_add_to_cart_button"
const _productImage = "div.woocommerce-product-gallery__image img"
const _productFeatures = '//table[@class="variations"]//tbody//tr'
const _productFeaturesDisableElements = ".ced-vm-swatch-wrapper-without-circle.ced-vm-disable"
const _productName = "div > div.product-info > h1"
const _productInStock = 'p.stock'
class ProductDescription {
  static giftCardAmount() {
    cy.get(_giftCardAmount).type(constantValues.amount).type('{enter}')
  }

  static addToCart() {
    cy.get(_addToCart).click()
  }

  static imageVerification() {
    cy.get(_productImage).invoke('attr', "src").should("contains", constantValues.image_Url)
  }

  static verifySuccessProductMessage() {
    Home.returnProductName().then((name) => {
      cy.get(_verificationMessage).should('contain', name)
    })
  }

  static viewCart() {
    cy.xpath(_viewCartButton).click()
  }

  static checkProductInStock() {
    cy.get(_productInStock).then(($ele) => {
     // cy.log($ele)
      if (($ele.text().includes("In stock"))) {
       // cy.log("contains element")
        this.selectFeature()
      }
      else{
        cy.log("false")
      }
    })
  }

  static selectFeature() {
    cy.xpath(_productFeatures).its('length').then((len) => {
      for (var i = 0; i < len; i++) {
        cy.xpath(_productFeatures).eq(i).find('div').not(_productFeaturesDisableElements).eq(0).click()

      }
    })
    this.checkForGiftCard()
  }

  static checkForGiftCard() {
    cy.wait(6000)
    cy.get(_productName).then(($ele) => {
      if ($ele.text().includes('Gift Card')) {
        this.giftCardAmount()
      }
      else{
        cy.log("false")
      }
    })
  }
}
export default ProductDescription