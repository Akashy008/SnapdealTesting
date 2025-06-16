const LoginPage = {

  visit() {
    cy.visit('https://www.snapdeal.com/');
    cy.contains('span', 'Sign In').click();

    // The Sign in iframe opens immediately
    cy.frameLoaded('iframe[src*="login"]'); // make sure cypress-iframe is installed
  },

  enterUsername(username) {
    cy.iframe()
      .find('input#userName')
      .type(username);
  },

  clickContinue() {
    cy.iframe()
      .find('button#checkUserBtn')
      .click();
  }
};

export default LoginPage;
