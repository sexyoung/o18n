import React, { Component } from 'react';

import Component1 from './Component1';
import Component2 from './Component2';

class App extends Component {
  render() {
    return (
      <div className="lang-map-list">
        <Component1 />
        <Component2 />
      </div>
    );
  }
}

export default App;
