let ProductDetailsPage = {
  addToCart() {
    cy.get('.buyLink', { timeout: 1000 }).should('be.visible').click({ force: true })
  }
}

export default ProductDetailsPage

