import { useState } from "react";
import { useForm } from '../Hooks/useForm';


export const Formularios = () => {

    const { formulario, email, password,onChange } = useForm({
        email: 'test@test.com',
        password: '123456'
    })



    return (
    <>
        <h3>Formularios</h3>
        <input type="text" onChange={({target}) => onChange( target.value, 'email')} value={email} className="form-control" placeholder="Email" />
        <input type="text" onChange={({target}) => onChange( target.value, 'password')} value={password} className="form-control mt-2 mb-2" placeholder="Password" />
    
    <code>
        <pre>{JSON.stringify ( formulario, null, 2)}</pre>
    </code>

    </>

    )
};
