import HomePage from '../Pages/Homepage'
import LoginPage from '../Pages/loginPage'
import loginData from '../../fixtures/loginData.json'

describe('Testing Search Functionality', () => {
    it('Searching with keyword and applying filter by Brand', () => {
        Homepage.openSite()
        Search.searchingProduct("Shirt")
        ProductListingPage.filterByBrand("Ketch")

        cy.get('.searchformInput.keyword').should('have.value', 'Shirt');  

        cy.get('.dp-widget-link[pogid]', {timeout:10000}) 
          .should('exist') 
          .first()
          .invoke('removeAttr', 'target')
          .click({ force: true })
    });
});

