function shouldStatic() {
  cy.get('#onlyCNAttr').should('contain', '只有简中才有的属性');
  cy.get('#onlyTWAttr').should('contain', '只有繁中才有的屬性');
  cy.get('#onlyENAttr').should('contain', 'only for EN');
}

describe('demo o18n', () => {
  it('basic work', () => {
    cy.visit('http://localhost:8080');
    cy.contains('zh-cn').click();
    cy.get('#locale').should('contain', 'cn');
    cy.get('#name').should('contain', '写诗羊');
    cy.get('#book').should('contain', '书');
    cy.get('#cat').should('contain', '猫咪');
    shouldStatic();
  });
  it('click zh-tw', () => {
    cy.contains('zh-tw').click();
    cy.get('#locale').should('contain', 'tw');
    cy.get('#name').should('contain', '寫詩羊');
    cy.get('#book').should('contain', '書');
    cy.get('#cat').should('contain', '貓咪');
    shouldStatic();
  });
  it('click en', () => {
    cy.contains('en').click();
    cy.get('#locale').should('contain', 'en');
    cy.get('#name').should('contain', 'sexyoung');
    cy.get('#book').should('contain', 'book');
    cy.get('#cat').should('contain', 'cat');
    shouldStatic();
  });
});
