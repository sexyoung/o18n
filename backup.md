
#### Basic example
```es6
import O18N from 'o18n';

const lang = new O18N({
  zh: { hello: '哈囉', good: '好' },
  en: { hello: 'hello', good: 'good' },
  jp: { hello: 'こんにちは', good: '良い' },
});

/* Default is the first language */
console.log(lang.hello); // 哈囉

lang.locale = 'jp';
console.log(lang.hello); // こんにちは

/* append new locale */
lang.add({
  ru: { hello: 'Здравствуйте', good: 'хорошо' },
});

lang.locale = 'ru';
console.log(lang.hello); // Здравствуйте
```

#### Example on other language content are incomplete
```es6
import O18N from 'o18n';

/* order is zh --> en --> jp */
const lang = new O18N({
  zh: { hello: '哈囉', good: '好' },
  en: { hello: 'hello'},
  jp: { good: '良い' },
});

/* Default is the first language */
console.log(lang.hello); // 哈囉
console.log(lang.good);  // 好

lang.locale = 'en';
console.log(lang.hello); // hello
console.log(lang.good);  // 好 ← en(x) --> zh(o) --> jp

lang.locale = 'jp';
console.log(lang.hello); // 哈囉 ← jp(x) --> zh(o) --> en
console.log(lang.good);  // 良い
```
