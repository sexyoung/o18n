function shouldStatic() {
  cy.get('#onlyCNAttr').should('contain', '只有简中才有的属性');
  cy.get('#onlyTWAttr').should('contain', '只有繁中才有的屬性');
  cy.get('#onlyENAttr').should('contain', 'only for EN');
}

const expectValue = [
  {
    locale: 'English',
    description: 'organizing i18n files new way.',
    startBlock: {
      title: 'Getting Started',
      examples: 'Examples',
      basic: 'Example with create-react-app',
      order: 'Example order of display for different languages',
      split: 'Example Use o18n between different components',
    }
  },
  {
    locale: '繁體中文',
    description: '用新的方式組織你的i18n檔案。',
    startBlock: {
      title: '新手入門',
      examples: '範例',
      basic: '基本範例',
      order: '使用第二順位語言檔代替缺少的鍵',
      split: '切割i18n檔在不同的元件之間',
    }
  },
  {
    locale: '简体中文',
    description: '用新的方式组织你的i18n档案。',
    startBlock: {
      title: '新手入门',
      examples: '范例',
      basic: '基本范例',
      order: '使用第二顺位语言档代替缺少的键',
      split: '切割i18n档在不同的元件之间',
    }
  },
  {
    locale: '日本語',
    description: 'i18nファイルを新しい方法で整理する。',
    startBlock: {
      title: 'はじめに',
      examples: '例',
      basic: '基本的な例',
      order: '不足しているキーの代わりに2次言語のファイルを使用する',
      split: '18nファイルを切断する',
    }
  },
];

describe('demo o18n', () => {
  before(() => {
    cy.visit('https://sexyoung.github.io/o18n/');
  });
  expectValue.forEach((lang) => {
    it(`click ${lang.locale}`, () => {
      cy.contains(lang.locale).click();
      cy.get('.description').should('contain', lang.description);
      cy.get('.start-block > .container > .title').should('contain', lang.startBlock.title);
      cy.get('.start-block > .container > .row .title').should('contain', lang.startBlock.examples);
      cy.get('.start-block > .container > .row  li:nth-of-type(1)').should('contain', lang.startBlock.basic);
      cy.get('.start-block > .container > .row  li:nth-of-type(2)').should('contain', lang.startBlock.order);
      cy.get('.start-block > .container > .row  li:nth-of-type(3)').should('contain', lang.startBlock.split);
    });
  });
});
