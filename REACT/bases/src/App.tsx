import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from './bases/CounterEffect';


function App() {
  return (
    <div className="App">
      <Counter initialValue={ 15 }  />
      <hr/>
      <CounterBy />
      <hr/>
      <CounterEffect />
      <hr/>
      
    </div>
  );
}

export default App;
