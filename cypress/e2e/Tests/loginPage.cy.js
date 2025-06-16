
import LoginPage from '../Pages/loginPage'

describe('Snapdeal Login Tests', () => {

  it('should navigate to login and enter username', () => {
    
    LoginPage.visit();
 
    LoginPage.enterUsername('1231231234');  
      
    LoginPage.clickContinue();
 
    cy.iframe()
      .find('input#j_username')
      .should('be.visible'); 
  });

});
