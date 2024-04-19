
import log from '../pages/login.po'
import file from '../pages/FileUpload.po'
//import  from '../fixtures'
import data from '../fixtures/loginCredentials.json'
import { afterEach } from 'mocha'



describe('File upload functionality', () => {

  const filepath1 = 'HulkCypress.png';

  beforeEach(() => {
    // Run before each test case
    cy.visit('https://the-internet.herokuapp.com/upload')
  })
    it('Verify user able to upload the file', () => {
      //const filepath = 'HulkCypress.png';
      cy.wait(5000);
      cy.get('input[id="file-upload"]').attachFile(filepath1)
      cy.get('[id="file-submit"]').click()
      cy.wait(3000);
    })

    it('Verify user able to drag and drop to upload the file', () => {
      //const filepath = 'HulkCypress.png';
      cy.wait(5000);
      cy.get('input[id="file-upload"]')
      .selectFile('cypress/fixtures/HulkCypress.png', { subjectType: 'drag-n-drop' })
      cy.get('[id="file-submit"]').click()
      cy.wait(3000);
    })

    it('Verify user able to multiple file upload', () => {
      //const filepath = 'HulkCypress.png';
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
      cy.wait(5000);
      cy.get('input[id="filesToUpload"]')
      .selectFile('cypress/fixtures/HulkCypress.png','cypress/fixtures/Jordon.jpg')
      
      cy.wait(3000);
    })
    
   

  }



)