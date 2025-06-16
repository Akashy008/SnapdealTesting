import Homepage from '../Pages/Homepage'
import CategoryPage from '../Pages/CategoryPage'
import productData from '../../fixtures/product.json'

describe('Category Navigation', () => {
  it('Goes to T-Shirts under Men\'s Fashion', () => {
    Homepage.openSite()
    CategoryPage.goToCategory(productData.category, productData["sub category"])
    cy.url().should('include', 'footwear-sports-shoes')
  })
})
