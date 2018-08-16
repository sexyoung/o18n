function shouldStatic() {
  cy.get('#onlyCNAttr').should('contain', '只有简中才有的属性');
  cy.get('#onlyTWAttr').should('contain', '只有繁中才有的屬性');
  cy.get('#onlyENAttr').should('contain', 'only for EN');
}

const expectValue = [
  {
    locale: 'cn', name: '写诗羊', book: '书', cat: '猫咪'
  },
  {
    locale: 'tw', name: '寫詩羊', book: '書', cat: '貓咪'
  },
  {
    locale: 'en', name: 'sexyoung', book: 'book', cat: 'cat'
  },
];

describe('demo o18n', () => {
  before(() => {
    cy.visit('http://localhost:8080');
  });
  expectValue.forEach((lang) => {
    it(`click ${lang.locale}`, () => {
      cy.contains(lang.locale).click();
      cy.get('#locale').should('contain', lang.locale);
      cy.get('#name').should('contain', lang.name);
      cy.get('#book').should('contain', lang.book);
      cy.get('#cat').should('contain', lang.cat);
    });
  });
});
