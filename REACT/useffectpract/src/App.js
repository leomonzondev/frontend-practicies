import React, { useState } from 'react'
import FetchCard from './FetchCard';
import ResizeApp from './ResizeApp';
// import Lifecycle from './Lifecycle';


function App() {

  const [show, setShow] = useState(false)




  return (
      <div>
        <button onClick={() => setShow (!show)}>Show/hide</button>

        {/* <Lifecycle /> */}
        {/* <FetchCard /> */}
        {show && <ResizeApp /> }
      </div>
  );
}

export default App;
