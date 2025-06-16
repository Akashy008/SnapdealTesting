import Homepage from "../Pages/Homepage";

describe('Home Page Test', () => {
  it('Opens Snapdeal', () => {
    Homepage.openSite()
    cy.url().should('include', 'snapdeal.com')
  })
})
