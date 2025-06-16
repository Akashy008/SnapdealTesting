const ProductListingPage = {
  filterByBrand(brand) {
    cy.get('[placeholder="Search by Brand"]').click()

    cy.get('.sd-input.js-searchable-box').type(brand, { force: true });
    cy.get('.btn.applyFilters.lfloat').click({ force: true });

  }
};

export default ProductListingPage
