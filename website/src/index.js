import React from 'react';
import ReactDOM from 'react-dom';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import './index.css';
import App from './App';

LogRocket.init('sexyoung/o18n');
setupLogRocketReact(LogRocket);

ReactDOM.render(<App />, document.getElementById('root'));
