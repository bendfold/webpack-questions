/* exported css */
import css from './styles/app.styl';
import appInit from './scripts/app-init';

appInit();
/* exported React */
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);