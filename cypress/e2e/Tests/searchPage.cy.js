import Search from "../Pages/search";
import Homepage from "../Pages/Homepage";
describe('Testing Search Fuctionality', () => {
    it('Searching with keyword', () => {
        Homepage.openSite()
        Search.searchingProduct("Shirt")
        cy.get('.searchformInput.keyword').should('have.value', 'Shirt');
        cy.get('.dp-widget-link[pogid="686464225564"]', {timeout:10000}) 
        .should('exist') 
        .first()
        .invoke('removeAttr', 'target')
        .click()


    });
});