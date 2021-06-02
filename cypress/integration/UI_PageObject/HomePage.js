import constantValues from '../../fixtures/constantValues.json'
const _item = "p.woocommerce-loop-product__title a"
const _checkBoxes = "div.prdctfltr_checkboxes label span"
const _image = 'div.box-image a img'

class Home {
    static checkBoxSelection(value) {
        cy.get(_checkBoxes).contains(value).click()
    }

    static selectProduct() {
        cy.wait(6000)
        cy.get(_item).eq(2).invoke('text').as('name')
        cy.get(_item).eq(2).click()
    }

    static returnProductName() {
        return cy.get('@name')
    }

    static imageVerification() {
        cy.get(_image).invoke("attr", "src").should("contains", constantValues.image_Url)
    }
}

export default Home