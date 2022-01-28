// import { TiposBasicos } from "./typescript/TiposBasicos";

// import { Contador } from "./components/Contador";

// import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
// import { Funciones } from './typescript/Funciones';
import { ContadorConHook } from './components/ContadorConHook';
import { Login } from './components/Login';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a TS-React</h1>
      <hr/>
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      <Login />
    </div>
  );
};

export default App