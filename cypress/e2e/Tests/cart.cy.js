import Homepage from "../Pages/Homepage";
import Search from "../Pages/search";

describe('Testing Add product to cart', () => {
    it('Searching with keyword', () => {
        Homepage.openSite()
        Search.searchingProduct("Shirt")
        cy.get('.searchformInput.keyword').should('have.value', 'Shirt');
        cy.get('.dp-widget-link[pogid="686464225564"]', {timeout:5000}) 
        .should('exist') 
        .first()
        .invoke('removeAttr', 'target')
        .click()
       cy.get('#add-cart-button-id > .intialtext').click()

    });
});