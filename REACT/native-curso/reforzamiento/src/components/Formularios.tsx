import { useState } from "react";


export const Formularios = () => {


    const [formulario, setFormulario] = useState({
        email: 'test@test.com',
        password: '123456'
    });


    const onChange = ( value: string, campo: string) => {

        setFormulario({
            ...formulario,
            [campo]: value
            
        })

    }

    return (
    <>
        <h3>Formularios</h3>
        <input type="text" onChange={({target}) => onChange( target.value, 'email')} value={formulario.email} className="form-control" placeholder="Email" />
        <input type="text" onChange={({target}) => onChange( target.value, 'password')} value={formulario.password} className="form-control mt-2 mb-2" placeholder="Password" />
    
    <code>
        <pre>{JSON.stringify ( formulario, null, 2)}</pre>
    </code>

    </>

    )
};
