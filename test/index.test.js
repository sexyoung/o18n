import O18N from '../src';
import locale from './locale.json';
import appendLocale from './append.locale.json';

let lang;

beforeAll(() => {
  lang = new O18N();
});

test('no give parameter to constructor', () => {
  lang.set({});
  expect(Object.keys(lang).length).toBe(0);
});

test('load locale file, default locale is first in Object', () => {
  lang.set(locale);
  expect(lang.name).toBe('寫詩羊');
  expect(lang.book).toBe('書');
  expect(lang.cat).toBe('貓咪');
});

test('if change lang to en, the localeMapping will change', () => {
  lang.locale = 'en';
  expect(lang.name).toBe('sexyoung');
  expect(lang.book).toBe('book');
  expect(lang.cat).toBe('cat');
});

test('if change lang to zh-cn, the localeMapping will change', () => {
  lang.locale = 'zh-cn';
  expect(lang.name).toBe('写诗羊');
  expect(lang.book).toBe('书');
  expect(lang.cat).toBe('猫咪');
});

test('if access the attribute of localeMapping undefined, access second locale attribute', () => {
  // if access some attribute of current Locale, but current locale have no attribute,
  // it give us second order locale content. ex: cn(NO) -> tw -> en
  expect(lang['TW-EN']).toBe('先存取zh-tw後存取en');

  lang.locale = 'en';
  expect(lang['TW-CN']).toBe('先存取zh-tw後存取zh-cn');

  lang.locale = 'zh-tw';
  expect(lang['CN-EN']).toBe('先存取zh-cn后存取en');
});

test('some attribute is stable, whatever you choose any locale', () => {
  let onlyTWAttr = null;
  let onlyCNAttr = null;
  let onlyENAttr = null;

  lang.locale = 'en';
  ({ onlyTWAttr, onlyCNAttr, onlyENAttr } = lang);
  expect(onlyTWAttr).toBe('只有繁中才有的屬性');
  expect(onlyCNAttr).toBe('只有简中才有的属性');
  expect(onlyENAttr).toBe('only for EN');

  lang.locale = 'zh-tw';
  ({ onlyTWAttr, onlyCNAttr, onlyENAttr } = lang);
  expect(onlyTWAttr).toBe('只有繁中才有的屬性');
  expect(onlyCNAttr).toBe('只有简中才有的属性');
  expect(onlyENAttr).toBe('only for EN');

  lang.locale = 'zh-cn';
  ({ onlyTWAttr, onlyCNAttr, onlyENAttr } = lang);
  expect(onlyTWAttr).toBe('只有繁中才有的屬性');
  expect(onlyCNAttr).toBe('只有简中才有的属性');
  expect(onlyENAttr).toBe('only for EN');
});

test('append another locale file', () => {
  lang.set(appendLocale, 'zh-tw'); // ← you can give locale to change.
  expect(lang.name).toBe('血絲養');
  expect(lang.appendAttr).toBe('血絲養的貓');
});
