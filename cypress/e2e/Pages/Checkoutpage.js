const CheckoutPage = {
  gotoCheckout() {
    cy.get('[id="rzp-quickcart-button"]').click()
  }
}

export default CheckoutPage
