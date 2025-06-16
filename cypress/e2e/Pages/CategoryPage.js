const CategoryPage = {
  goToCategory() {
    cy.get(`[class="catText"]`).trigger('mouseover', { force: true })
    cy.contains(String(subcategory))
      .should('be.visible')
      .click({ force: true })
  }
}

export default CategoryPage

