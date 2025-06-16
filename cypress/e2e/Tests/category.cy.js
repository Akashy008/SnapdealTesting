import Homepage from '../Pages/Homepage'
import CategoryPage from '../Pages/CategoryPage'
import productData from '../../fixtures/product.json'

describe('Snapdeal Categories Tests', () => {

  it('should navigate to Casual Shoes under Mens Fashion', () => {
   
  Homepage.openSite()
    CategoryPage.goToCategory();
    cy.url().should('include', 'casual-shoes'); 
    cy.get('h1').should('contain.text', 'Casual Shoes'); 
  });

});