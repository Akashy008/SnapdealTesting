const HomePage = {
  openSite() {
    cy.visit('https://www.snapdeal.com/')
  },
  searchProduct(term) {
    cy.get('#inputValEnter').type(term)
    cy.get('.searchTextSpan').click()
  }
}

export default HomePage


