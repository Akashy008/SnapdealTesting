import Product from "../Pages/ProductListing";
import Homepage from "../Pages/Homepage";
import ProductListing from "../Pages/ProductListing";
describe('Testing Search Fuctionality', () => {
    it('Searching with keyword', () => {
        Homepage.openSite()
        ProductListing.brandProduct("Ketch")
        cy.get('.searchformInput.keyword').should('have.value', 'Ketch');


    });
});