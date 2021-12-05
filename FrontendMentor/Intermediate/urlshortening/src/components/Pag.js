import React from 'react'

const Pag = () => {
    return (
        <div>
            <nav>
                
                <ul>
                    <img src=".../images/logo.svg" alt="logo"/>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
                <div>
                    <ul>
                        <li>Login</li>
                        <li><button>Sign Up</button></li>
                    </ul>
                </div>
            </nav>

            <main>
                <div className="hero-izq">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are perfoming</p>
                    <button>Get Started</button>
                </div>
                <img src=".../images/bg-boost-desktop.svg" alt="backdeskt" />
            </main>
        </div>
    )
}

export default Pag
