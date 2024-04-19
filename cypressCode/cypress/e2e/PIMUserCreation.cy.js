import log from '../pages/login.po'
import PIM from '../pages/PIMUserCreation.po'
import data from '../fixtures/loginCredentials.json'


Cypress.Commands.add('getRandomFourDigitNumber', () => {
  return Cypress._.random(1000, 9999);
});


describe('PIMUser Creation Test Suite', () => {
    it('Verify user creation', () => {

      cy.visit('/')

      cy.get(log.usernameInput()).type(data.Username)
      cy.get(log.passwordInput()).type(data.Password)
      cy.get(log.submit()).click()
      cy.url().should('include', 'https://opensource-demo.orangehrmlive.com')
      cy.get(PIM.PIMSection()).click()
      cy.get(PIM.AddButton()).click()
      cy.get(PIM.EmployeeID()).clear()
      cy.getRandomFourDigitNumber().then(randomNumber => {
        // Output the generated random number
        cy.log('Generated random 4-digit number: ' + randomNumber);
        cy.get(PIM.PIMFirstName()).type("Hulk"+randomNumber)
      cy.get(PIM.PIMMiddleName()).type("Middle"+randomNumber)
      cy.get(PIM.PIMLastName()).type("Last"+randomNumber)
        cy.get(PIM.EmployeeID()).type(randomNumber)
      });
      cy.get(PIM.SaveButton1()).click()
    

    }) 
  })