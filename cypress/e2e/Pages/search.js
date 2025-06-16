const Search = {
    searchingProduct(product){
        cy.get(`[class="col-xs-20 searchformInput keyword"]`).type(product)
        cy.get('[class="searchTextSpan"]').click()
        
    }
}
export default Search