const Productlisting = {
    brandProduct(brand){
        cy.get(`[class="col-xs-20 searchformInput keyword"]`).type(brand)
        cy.get('[class="searchTextSpan"]').click()
        
    }
}
export default Productlisting