const set           = Symbol('set');
const reset         = Symbol('reset');
const locale        = Symbol('locale');
const organize      = Symbol('organize');
const localeList    = Symbol('localeList');
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
  [organize](localeObj, result = {}, force = false) {
    Object.keys(localeObj).forEach((key) => {
      // check is keys exist?
      // 1. if the key is exist, check the value type, if it is object, don't need set anything, and set initialResult equal {}
      // 2. if localeObj's key isn't object, give localeObj's key, else call itself base on localeObj's key
      let initialResult = {};
      if (result[key]) {
        if (typeof result[key] !== 'object' && !force) return;
        initialResult = result[key];
      }
      result[key] = typeof localeObj[key] !== 'object'
        ? localeObj[key] : this[organize](localeObj[key], initialResult, force);

      // if (!result[key]) {
      // result[key] = typeof localeObj[key] !== 'object'
      // ? localeObj[key] : this[organize](localeObj[key]);
      // } else {
      // result[key]  = typeof result[key] !== 'object'
      // ? result[key] : typeof localeObj[key] !== 'object'
      // ? localeObj[key] : this[organize](localeObj[key], result[key]);
      // }
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
  add(_locale, defaultLocale = '') {
    this[localeList] = this[organize](
      _locale,
      this[localeList],
      true,
    );
    const mainLocale = defaultLocale || this.locale || Object.keys(this[localeList])[0] || '';
    this.locale = mainLocale;
  }
}

export default O18N;

// default value
O18N.locale = '';
