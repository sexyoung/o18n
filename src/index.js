import merge from 'deepmerge';

const set           = Symbol('set');
const reset         = Symbol('reset');
const locale        = Symbol('locale');
const organize      = Symbol('organize');
const localeList     = Symbol('localeList');
const mappingLocale = Symbol('mappingLocale');

const ERROR = {
  NO_LOCALE:  'NoLocale',
};

class O18N {
  constructor(_localeList = {}, defaultLocale = '') {
    const localeKeyList = Object.keys(_localeList);
    this[mappingLocale] = {};
    this[localeList] = _localeList;
    this.locale = defaultLocale || localeKeyList[0];
  }

  // organize mappingLocale!
  [organize](localeObj, result = {}) {
    Object.keys(localeObj).forEach((key) => {
      // check is keys exist?
      if (!result[key]) {
        result[key] = typeof localeObj[key] !== 'object'
          ? localeObj[key] : this[organize](localeObj[key]);
      }
    });
    return result;
  }

  // get current locale
  get locale() {
    return this[locale];
  }

  // set current locale, and rebuild mappingLocale
  set locale(_locale) {
    let message = null;
    try {
      if (!Object.keys(this[localeList]).includes(_locale)) {
        throw new Error(ERROR.NO_LOCALE);
      }
      this[locale] = _locale;
      this[set](_locale);
      message = 'OK';
    } catch (e) {
      ({ message } = e);
    }
    return message;
  }

  // rebuild mappingLocale
  [set](_locale) {
    const { [_locale]: main, ...others } = this[localeList];
    this[reset]();
    this[mappingLocale] = this[organize](main);
    Object.keys(others).forEach((key) => {
      this[mappingLocale] = this[organize](
        others[key],
        this[mappingLocale]
      );
    });
    Object.keys(this[mappingLocale]).forEach((key) => {
      this[key] = this[mappingLocale][key];
    });
  }

  // reset mappingLocale
  [reset]() {
    Object.keys(this[mappingLocale]).forEach((key) => {
      delete this[key];
    });
    this[mappingLocale] = {};
  }

  // set new locale, maybe replace some key/value
  set(_locale, defaultLocale = '') {
    this[localeList] = merge.all([
      this[localeList],
      _locale,
    ]);
    const mainLocale = defaultLocale || this.locale || Object.keys(this[localeList])[0] || '';
    this.locale = mainLocale;
  }
}

export default O18N;

// default value
O18N.locale = '';
