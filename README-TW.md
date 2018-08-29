# o18n
[![npm version](https://badge.fury.io/js/o18n.svg)](https://badge.fury.io/js/o18n) [![Coverage Status](https://coveralls.io/repos/github/sexyoung/o18n/badge.svg?branch=master)](https://coveralls.io/github/sexyoung/o18n?branch=master) [![Build Status](https://travis-ci.org/sexyoung/o18n.svg?branch=master)](https://travis-ci.org/sexyoung/o18n) [![codecov](https://codecov.io/gh/sexyoung/o18n/branch/master/graph/badge.svg)](https://codecov.io/gh/sexyoung/o18n) [![Maintainability](https://api.codeclimate.com/v1/badges/74fbd29f1eaf55c971c1/maintainability)](https://codeclimate.com/github/sexyoung/o18n/maintainability) [![Readme Score](http://readme-score-api.herokuapp.com/score.svg?url=sexyoung/o18n)](http://clayallsopp.github.io/readme-score?url=sexyoung/o18n) [![Package Quality](http://npm.packagequality.com/shield/o18n.svg)](http://packagequality.com/#?package=o18n) [![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

**o18n** 是一個能幫你組織化語言檔的套件. 能決定語系的顯示順序，還能切割語系檔到各個元件中，以避免語言包非常大一坨。 **因為分每個元件可能會有自己的語系檔，所以就算重複Key值，也沒有關係。**

![o18n demo](https://media.giphy.com/media/4WFhEZ9nlZmWGAfH09/giphy.gif)

### 網站的 i18n 設定只要像這樣
```es6
import O18N from 'o18n';

const lang = new O18N({
  zh: { hello: '哈囉'},
  en: { hello: 'hello'},
});

/* Default is the first language */
console.log(lang.hello); // 哈囉

lang.locale = 'en';
console.log(lang.hello); // hello
```

### 為何使用 o18n?
- **簡單易用:** 如果你了 create-react-app 這傢伙。只要 **import o18n**，然後就能翹腳開始。
- **語系順序:** 使用當前語系沒有某個key值，它會以第二順位語系的key替代，如果第二順位也沒有該key，那它會找第三順位，直到永遠。
- **組件語系:** 為了避免單一語系檔過大，你可以分割你的語系檔到各個元件裡面。也因為如此，所以不同元件之間就算有重複的key也無所謂。

如果你對 webpack 不熟但你又很想很快使用它，那 [create-react-app](https://github.com/facebook/create-react-app) 是一個建置環境的好選擇。

```shell
npm i -g create-react-app
```

### 安裝

#### npm
```shell
npm i --save o18n
```

#### Yarn
```shell
yarn add o18n
```

### 範例
- [Example with create-react-app](https://github.com/sexyoung/o18n/tree/master/example/basic)
- [Example order of display for different languages](https://github.com/sexyoung/o18n/tree/master/example/order)
- [Example Use o18n between different components](https://github.com/sexyoung/o18n/tree/master/example/split)

馬上看 [線上示範](https://sexyoung.github.io/o18n)

## 作者
- sexyoung

## License
MIT License. 請直接看 LICENSE 這個檔.
