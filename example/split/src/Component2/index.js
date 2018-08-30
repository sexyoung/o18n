import React from 'react';
import O18N from 'o18n';
import locale from './locale.json';
import globalLocale from '../globalLocale.json';

const lang = new O18N(locale);
lang.add(globalLocale);

export default class Component2 extends React.Component {
  render () {
    return (
      <div>
        Component2 /
        name: {lang.name} /
        age: {lang.age} /
        live: {lang.live} /
        like: {lang.like}
      </div>
    );
  }
}
