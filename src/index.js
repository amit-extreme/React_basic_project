import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Demo from './Demo';
import Avatar from './Avatar';
import './Demo.css';
import './Avatar.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div><Avatar /></div>, document.getElementById('root'));
serviceWorker.unregister();
