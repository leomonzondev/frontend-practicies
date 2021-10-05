import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RandomUser } from './components/RandomUser/RandomUser';

ReactDOM.render(
  <React.StrictMode>
    <RandomUser />
  </React.StrictMode>,
  document.getElementById('root')
);

