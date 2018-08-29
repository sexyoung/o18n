import React, { Component } from 'react';
import O18N from 'o18n';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hopscotch } from 'react-syntax-highlighter/styles/hljs';
import './App.css';

import localeFile from './locale';
const lang = new O18N(localeFile);

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang 
    }
  }
  handleChangeLang = locale => {
    lang.locale = locale;
    this.setState({ lang });
  }
  render() {
    const { lang } = this.state;
    return (
        <div className="App">
        <div className="hero">
          <div className="container">
            <div className="block">
              <div className="title">o18n</div>
              <div className="description">
                {lang.description}
              </div>
              <ul className="locale-list">
                <li onClick={() => this.handleChangeLang('en')}>English</li>
                <li onClick={() => this.handleChangeLang('tw')}>繁體中文</li>
                <li onClick={() => this.handleChangeLang('cn')}>简体中文</li>
                <li onClick={() => this.handleChangeLang('jp')}>日本語</li>
              </ul>
              <span className="terminal">
                npm install --save o18n
              </span>
              <div className="getting-started">
                <a className="github-button" href="https://github.com/sexyoung/o18n" data-size="large" aria-label="Star sexyoung/o18n on GitHub">Star</a>
              </div>
            </div>
          </div>
        </div>
        <div className="start-block">
          <div className="container">
            <h3 className="title">{lang.startBlock.title}</h3>
            <div className="row">
              <div className="col-sm-6">
                <SyntaxHighlighter
                  language='javascript'
                  style={hopscotch}
                  customStyle={{
                    padding: '20px',
                    lineHeight: '20px'
                  }}>{`import O18N from 'o18n';
const lang = new O18N({
  zh: { hello: '哈囉' },
  en: { hello: 'hello' },
});

/* Default is the first language */
console.log(lang.hello); // 哈囉

lang.locale = 'en';
console.log(lang.hello); // hello`}</SyntaxHighlighter>
              </div>
              <div className="col-sm-6">
                <div className="title">{lang.startBlock.examples}</div>
                <ul>
                  <li><a href="https://github.com/sexyoung/o18n/tree/master/example/basic">{lang.startBlock.basic}</a></li>
                  <li><a href="https://github.com/sexyoung/o18n/tree/master/example/order">{lang.startBlock.order}</a></li>
                  <li><a href="https://github.com/sexyoung/o18n/tree/master/example/split">{lang.startBlock.split}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          Ⓒ 2018 sexyoung inc.
        </div>
      </div>
    );
  }
}

export default App;
