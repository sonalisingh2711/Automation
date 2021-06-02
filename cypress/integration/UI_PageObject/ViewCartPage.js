import constantValues from '../../fixtures/constantValues.json'
import Home from './HomePage'
const _productImage = "td.product-thumbnail img"
const _productName="td.product-name a"
class ViewCart {
    static imageVerification() {
        cy.get(_productImage).invoke('attr', 'src').should('contains',constantValues.image_Url)
    }
    
    }

export default ViewCart