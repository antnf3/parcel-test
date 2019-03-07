import React from 'react';
import ReactDom from 'react-dom';
import 'babel-polyfill';
import App from './src/App';
import Typography from './typography';

ReactDom.render(<App />, document.getElementById('app'));
