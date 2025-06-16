import Search from "../Pages/search";
import Homepage from "../Pages/Homepage";
import ProductListingPage from "../Pages/ProductListing";

describe('Testing Search Functionality', () => {
    it('Searching with keyword and applying filter by Brand', () => {

        Homepage.openSite();
        Search.searchingProduct("Shirt");
        cy.get('.searchformInput.keyword').should('have.value', 'Shirt'); 
        ProductListingPage.filterByBrand("Ketch");
        cy.get('.product-title', {timeout:10000}).should('exist')
          .each(($el) => {
            expect($el.text()).to.include('Ketch'); 
          });

    });
});