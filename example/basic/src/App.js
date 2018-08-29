import React, { Component } from 'react';
import O18N from 'o18n';
import localeFile from './locale';

const lang = new O18N(localeFile);

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang,
    }
  }
  handleChange = locale => {
    lang.locale = locale;
    this.setState({ lang });
  }
  render() {
    const { lang } = this.state;
    return (
      <div className="lang-map-list">
        <button id="cn" onClick={() => this.handleChange('cn')}>cn</button>
        <button id="tw" onClick={() => this.handleChange('tw')}>tw</button>
        <button id="en" onClick={() => this.handleChange('en')}>en</button>
        <h3>locale: <span id="locale">{lang.locale}</span></h3>
        <div>name: <span id="name">{lang.name}</span></div>
        <div>book: <span id="book">{lang.book}</span></div>
        <div>cat: <span id="cat">{lang.cat}</span></div>
        <div>onlyCNAttr: <span id="onlyCNAttr">{lang.onlyCNAttr}</span></div>
        <div>onlyTWAttr: <span id="onlyTWAttr">{lang.onlyTWAttr}</span></div>
        <div>onlyENAttr: <span id="onlyENAttr">{lang.onlyENAttr}</span></div>
      </div>
    );
  }
}

export default App;
