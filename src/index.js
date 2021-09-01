import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Components/Button';
import Main from './Components/Main';
import './style.scss';

ReactDOM.render(
  <div className="test">
    test
    <Main />
    <Button />
  </div>,
  document.getElementById('root')
);
