describe('AmazonSuite', () => {
    it('TestCaseone', () => {
      cy.visit('https://www.amazon.in/')
      cy.get('#nav-link-accountList-nav-line-1').click()
      cy.get("input[id='ap_email']").type('6382423808')
      cy.get("span[id='continue']").click()
      cy.get("input[id='ap_password']").type('Madhavaram@51')
      cy.get("input[id='signInSubmit']").click()
      // Adding a wait for the navigation menu icon to be visible
      cy.get("i.hm-icon.nav-sprite").should('be.visible').click()
      cy.get("[id='hmenu-canvas']>div>ul>li:nth-child(2)>a").click()
      // Adding a wait for the 'Mobiles, Computers' link to be visible
      // Add further actions as necessary
    })
})

