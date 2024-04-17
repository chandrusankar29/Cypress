const { beforeEach } = require("mocha")

describe('heroKuApp', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Test case Add Element', () => {
      cy.get("#content > ul > li:nth-child(2) > a").click()
      for (let i = 0; i < 5; i++) {
        cy.get("#content > div > button").click()
      }
      for (let i = 0; i < 5; i++) {
        cy.get("#elements > button:nth-child(1)").click()
      }
    })
    it.only('Test case Auth', () => {
      cy.visit('https://the-internet.herokuapp.com/basic_auth',{ auth: {username: "admin",password: "admin"}})
    })
    it('Test case ', () => {
       
      cy.get("#content > ul > li:nth-child(29) > a").click()

      cy.get("#content > div > ul > li:nth-child(1) > button").click()
      //Click JS click
      cy.get("#content > div > ul > li:nth-child(2) > button").click()
      cy.on("window:confirm", (s) => {
        return true;
     });
     //Click For JS Prompt

//     cy.get("#content > div > ul > li:nth-child(3) > button").click()
     cy.window().then(win => {
      cy.stub(win, 'prompt').returns('Chennai')
      cy.get("#content > div > ul > li:nth-child(3) > button").click()
    })
  })


})

