import { deSuggestions } from "../public/content";


function App() {

  const handleSugg = () => {
    deSuggestions()
    console.log('DELETE ENVIADA')
  }


  return (
    <div className="App">
      <button onClick={handleSugg}>Delete Feed</button>
    </div>
  );
}

export default App;
