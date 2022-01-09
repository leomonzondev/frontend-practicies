import React, { useEffect }  from 'react'
import { useForm } from '../../Hooks/useForm'
import './effect.css'



export const FormWithCustomHook = () => {


    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    })


    const { name, email, password } = formValues

    
    const handleSubmit =(e) => {
        e.preventDefault()
        console.log(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form wioth custom hook</h1>
            <hr/>

            <div className='from-group'>
                <input type="text" name="name" className="form-control" placeholder='tu nombre' autoComplete='off' value={name} onChange={handleInputChange} />
            </div>

            <div className='from-group'>
                <input type="text" name="email" className="form-control" placeholder='tu email' autoComplete='off' value={email} onChange={handleInputChange} />
            </div>

            <div className='from-group'>
                <input type="password" name="password" className="form-control" placeholder='****'  value={password} onChange={handleInputChange} />
            </div>

                <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    )
}
