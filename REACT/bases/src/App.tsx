import { Counter } from "./Components/Counter";
import { Usuario } from "./Components/Usuario";

import { TimerPadre } from "./Components/TimerPadre";
import { ContadorRed } from "./Components/ContadorRed";




function App() {
  return (
    <div className="App">
      <h1>React + TS</h1>
      <hr />

      <Counter />
      <Usuario />

      <h2 className="mt-5"> userEffect - useRef </h2>
      <hr />

      <TimerPadre />

      <h2 className="mt-5">useReducer</h2>
      <hr/>
      <ContadorRed />
    </div>
  );
}

export default App;
