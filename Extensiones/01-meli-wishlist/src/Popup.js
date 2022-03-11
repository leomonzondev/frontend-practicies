import React from 'react'
import { render } from 'react-dom'

import { deFeed } from './contentscript'



export const Popup = () => {



  return (
    <div>
        AAAAA
        {/* <button onClick={deFeed}>Delete feed</button> */}
    </div>
  )
}

render(<Popup />, document.getElementById('target'))