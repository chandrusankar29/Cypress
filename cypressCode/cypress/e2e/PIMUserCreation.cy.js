import log from '../pages/login.po'
import PIM from '../pages/PIMUserCreation.po'
import data from '../fixtures/loginCredentials.json'


Cypress.Commands.add('getRandomFourDigitNumber', () => {
  return Cypress._.random(1000, 9999);
});

Cypress.Commands.add("getRandomDate", (startDate, endDate) => {
  const start = startDate.getTime();
  const end = endDate.getTime();
  const randomTimestamp = start + Math.random() * (end - start);
  const randomDate = new Date(randomTimestamp);
  
  // Format the date as YYYY-DD-MM
  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based month
  const day = String(randomDate.getDate()).padStart(2, '0');
  
  return `${year}-${day}-${month}`;
});


describe('PIMUser Creation Test Suite', () => {
  beforeEach(() => {
    // Run before each test case
    cy.visit('/')
  })

afterEach(() =>{
  cy.log("Test Completed")
})


    it('Verify user creation, personal details adding and Blood type adding', () => {
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
      cy.getRandomFourDigitNumber().then(randomNumber => {
        cy.get(PIM.otherID(), { timeout: 5000 }).type(randomNumber)
        cy.get(PIM.otherID()).type(randomNumber)
        cy.get(PIM.driverLicenseNumber()).type(randomNumber)
        cy.get(PIM.driverLicenseNumber()).type(randomNumber)
      });

      cy.getRandomDate(new Date('2027-01-01'), new Date('2028-01-01')).then(randomDate => {
        // Use randomDate in your test
        cy.log(randomDate);
        cy.get(PIM.licenseExpiryDate()).type(randomDate)
        cy.get(PIM.DOB()).type(randomDate, { force: true });
        cy.get(PIM.Gender()).click()
        cy.get(PIM.saveButton2()).click()
        
      });
      cy.get(PIM.bloodType()).click()
      cy.get(PIM.bloodValue()).click()
      cy.get(PIM.saveButton2()).click()

    }) 
    it('Verify user creation and personal details adding', () => {
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
      cy.getRandomFourDigitNumber().then(randomNumber => {
        cy.get(PIM.otherID(), { timeout: 5000 }).type(randomNumber)
        cy.get(PIM.otherID()).type(randomNumber)
        cy.get(PIM.driverLicenseNumber()).type(randomNumber)
        cy.get(PIM.driverLicenseNumber()).type(randomNumber)
      });

      cy.getRandomDate(new Date('2027-01-01'), new Date('2028-01-01')).then(randomDate => {
        // Use randomDate in your test
        cy.log(randomDate);
        cy.get(PIM.licenseExpiryDate()).type(randomDate)
        cy.get(PIM.DOB()).type(randomDate, { force: true });
        cy.get(PIM.Gender()).click()
        cy.get(PIM.saveButton2()).click()
        
      });
    }) 

    it('Verify user creation', () => {
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