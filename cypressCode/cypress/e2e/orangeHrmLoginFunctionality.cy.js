
import log from '../pages/login.po'
import data from '../fixtures/loginCredentials.json'

describe('Login functionality', () => {
  beforeEach(() => {
    // Run before each test case
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

afterEach(() =>{
  cy.log("Test Completed")
})

    it('Verify login functionality with valid username and password', () => {
      console.log(log.usernameInput())
      cy.get(log.usernameInput()).type(data.Username)
      cy.get(log.passwordInput()).type(data.Password)
      cy.get(log.submit()).click()
      cy.url().should('include', 'https://opensource-demo.orangehrmlive.com')
      cy.get(log.OptionDropDown()).click()
      cy.get(log.logout()).click()

    })
    
    it('Verify login functionality with invalid username and invalid password', () => {
        console.log(log.usernameInput())
        cy.get(log.usernameInput()).type(data.InvalidUsername)
        cy.get(log.passwordInput()).type(data.InvalidUsername)
        cy.get(log.submit()).click()
        cy.contains(log.errorMessage()).then(($element) => {
            // Get the text content of the element
            const text = $element.text()
            // Compare the text with the expected value
            expect(text).to.equal(data.errorMessage)
          })
      })

      it('Verify login functionality with valid username and invalid password', () => {
        console.log(log.usernameInput())
        cy.get(log.usernameInput()).type(data.Username)
        cy.get(log.passwordInput()).type(data.InvalidPassword)
        cy.get(log.submit()).click()
        cy.contains(log.errorMessage()).then(($element) => {
            // Get the text content of the element
            const text = $element.text()
            // Compare the text with the expected value
            expect(text).to.equal(data.errorMessage)
          })
      })
      it('Verify login functionality with invalid username and valid password', () => {
        console.log(log.usernameInput())
        cy.get(log.usernameInput()).type(data.InvalidUsername)
        cy.get(log.passwordInput()).type(data.Password)
        cy.get(log.submit()).click()
        cy.contains(log.errorMessage()).then(($element) => {
            // Get the text content of the element
            const text = $element.text()
            // Compare the text with the expected value
            expect(text).to.equal(data.errorMessage)
          })
      })
      

  })