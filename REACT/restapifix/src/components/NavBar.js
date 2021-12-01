
import React, { useState } from 'react'

const NavBar = () => {

    const [mode, setMode] = useState(false)

    return (
        <div className="nav">
            <h2>Where in the world?</h2>
            
            <button onClick={() => setMode(!mode)}>{mode ? <i class="fas fa-moon"> Dark mode</i> : 'Light mode'}</button>
        </div>
    )
}

export default NavBar
