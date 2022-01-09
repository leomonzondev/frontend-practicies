import React from 'react';
import ReactDOM from 'react-dom';
// import { FormWithCustomHook } from './Components/02-useEffect/FormWithCustomHook';
// import { App } from './App';
// import { CounterApp } from './Components/01-useState/CounterApp';
// import { CounterWithCustom } from './Components/01-useState/CounterWithCustom';
// import { SimpleForm } from './Components/02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './Components/03-examples/MultipleCustomHooks';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>,
  document.getElementById('root')
);


