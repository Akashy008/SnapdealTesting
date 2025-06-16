const LoginPage = {
 openLogin() {
  cy.visit('https://www.snapdeal.com/')
  cy.contains('Login').click()
  cy.get("#userMobilenoEmail").should('be.visible')
},


enterCredentials(Email) {
  cy.get("#userMobilenoEmail").type(Email);
  cy.get("#checkUserBtn").click();
}

}

export default LoginPage
