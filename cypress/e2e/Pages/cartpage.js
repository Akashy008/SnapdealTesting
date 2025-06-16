const CartPage = {
  checkCart() {
    cy.visit('https://www.snapdeal.com/viewcart')
    
    cy.get('.item-title').should('contain', 'ASIAN THAR')
  }
}

export default CartPage

