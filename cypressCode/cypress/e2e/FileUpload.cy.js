
import log from '../pages/login.po'
import file from '../pages/FileUpload.po'
//import  from '../fixtures'
import data from '../fixtures/loginCredentials.json'
import { afterEach } from 'mocha'



describe('File upload functionality', () => {
  beforeEach(() => {
    // Run before each test case
    cy.visit('https://the-internet.herokuapp.com/upload')
  })
    it('Verify user able to upload the file', () => {
      const filepath = 'HulkCypress.png';
      
      cy.wait(5000);
      cy.get('input[id="file-upload"]').attachFile(filepath)
      cy.get('[id="file-submit"]').click()
      cy.wait(3000);
    })
    
   

  })