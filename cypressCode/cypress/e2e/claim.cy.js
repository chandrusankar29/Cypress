import log from '../pages/login.po'
import data from '../fixtures/loginCredentials.json'
import cla from '../pages/claim.po'
describe('Claim Test case', () => {
    it('Verify add Claim functionality', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com')
      cy.get(log.usernameInput()).type(data.Username)
      cy.get(log.passwordInput()).type(data.Password)
      cy.get(log.submit()).click()
      cy.get(cla.claimSection()).click()
      cy.get(cla.assignClaim()).click()
      cy.get(cla.EmployeeTextBox()).type('Test')
      cy.wait(4000);
      cy.get(cla.EmployeeDropdownclick()).click({force: true})
      cy.get(cla.EventDropDownClick()).click()
      cy.get(cla.EventDropDownValue()).click()
      cy.get(cla.CurrencyDropDownClick()).click()
      cy.get(cla.CurrencyDropDownValue()).click()
      cy.get(cla.RemarksTextBox()).type('Test')
      cy.get(cla.ClickSave()).click()

    })
})

