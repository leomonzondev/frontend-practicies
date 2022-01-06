import React from 'react';
import ReactDOM from 'react-dom';
// import { App } from './App';
// import { CounterApp } from './Components/01-useState/CounterApp';
import { CounterWithCustom } from './Components/01-useState/CounterWithCustom';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <CounterWithCustom />
  </React.StrictMode>,
  document.getElementById('root')
);


