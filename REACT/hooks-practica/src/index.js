import React from 'react';
import ReactDOM from 'react-dom';
// import { FormWithCustomHook } from './Components/02-useEffect/FormWithCustomHook';
// import { App } from './App';
// import { CounterApp } from './Components/01-useState/CounterApp';
// import { CounterWithCustom } from './Components/01-useState/CounterWithCustom';
// import { SimpleForm } from './Components/02-useEffect/SimpleForm';
// import { MultipleCustomHooks } from './Components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './Components/04-useRef/FocusScreen';
import { RealExample } from './Components/04-useRef/RealExample';
import { Layout } from './Components/05-useLayoutEffect/Layout.js';
import { Memorize } from './Components/06-memos/Memorize';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <Memorize />
  </React.StrictMode>,
  document.getElementById('root')
);


