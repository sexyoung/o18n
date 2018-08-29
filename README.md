# o18n
[繁體中文](https://github.com/sexyoung/o18n/blob/master/README-TW.md)


[![npm version](https://badge.fury.io/js/o18n.svg)](https://badge.fury.io/js/o18n) [![Coverage Status](https://coveralls.io/repos/github/sexyoung/o18n/badge.svg?branch=master)](https://coveralls.io/github/sexyoung/o18n?branch=master) [![Build Status](https://travis-ci.org/sexyoung/o18n.svg?branch=master)](https://travis-ci.org/sexyoung/o18n) [![codecov](https://codecov.io/gh/sexyoung/o18n/branch/master/graph/badge.svg)](https://codecov.io/gh/sexyoung/o18n) [![Maintainability](https://api.codeclimate.com/v1/badges/74fbd29f1eaf55c971c1/maintainability)](https://codeclimate.com/github/sexyoung/o18n/maintainability) [![Readme Score](http://readme-score-api.herokuapp.com/score.svg?url=sexyoung/o18n)](http://clayallsopp.github.io/readme-score?url=sexyoung/o18n) [![Package Quality](http://npm.packagequality.com/shield/o18n.svg)](http://packagequality.com/#?package=o18n) [![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

**o18n** is a plugin for organize your language files. You can decide the order of display for different languages. It can set content in the component to avoid using a large language file on the website. **It solves the problem of duplicate keys between different components.**

![o18n demo](https://media.giphy.com/media/4WFhEZ9nlZmWGAfH09/giphy.gif)

### Your i18n setting for website can be easier
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

### Why o18n?
- **Simplicity:** if you use create-react-app and then import it, you can start.
- **Prioritized:** When a language does not have a key, it will be replaced with the second-order language. If the second order is not there, then the third order will be used.
- **Modularization:** Avoid language files that are too large. You can split the language files and spread them in each component. Because of this, it doesn't matter if there are duplicate keys between components..

If you are unfamiliar with webpack and you want to get started quickly, it is also a good idea to install [create-react-app](https://github.com/facebook/create-react-app) to build the development environment.

```shell
npm i -g create-react-app
```

### Installing

#### npm
```shell
npm i --save o18n
```

#### Yarn
```shell
yarn add o18n
```

### Examples
- [Example with create-react-app](https://github.com/sexyoung/o18n/tree/master/example/basic)
- [Example order of display for different languages](https://github.com/sexyoung/o18n/tree/master/example/order)
- [Example Use o18n between different components](https://github.com/sexyoung/o18n/tree/master/example/split)

See the [Demo](https://sexyoung.github.io/o18n)

## Authors
- sexyoung

## License
MIT License. See the included LICENSE file.
