import React from 'react';
import O18N from 'o18n';
import globalLocale from '../globalLocale.json';
import locale from './locale.json';

const lang = new O18N(locale);
lang.add(globalLocale);

export default class Component1 extends React.Component {
  render () {
    return (
      <div>
        Component1 /
        name: {lang.name} /
        age: {lang.age} /
        live: {lang.live} /
        like: {lang.like}
      </div>
    );
  }
}
