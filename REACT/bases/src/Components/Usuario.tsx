import { useState } from "react"

interface User {
    uid: String;
    name: String;
}





export const Usuario = () => {

    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Leo'
        })
    }

    return (
        <div className="mt-5" >
            <h3>Usuario: useSate</h3>

            <button 
                onClick={ login }
                className="btn btn-outline-primary">
                    Login
            </button>

            {
                (!user)
                    ? <pre> No hay usuario </pre>
                    : <pre> { JSON.stringify( user ) } </pre>
            }

        </div>
    )
}
