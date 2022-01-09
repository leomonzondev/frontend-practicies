import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message'


export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name:'',
        email:''
    })


    const { name, email } = formState


    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            name: target.value
        })
    }

    return (
        <div>
            <h1>Simple form</h1>
            <hr/>

            <div className='from-group'>
                <input type="text" name="name" className="form-control" placeholder='tu nombre' autoComplete='off' value={name} onChange={handleInputChange} />
            </div>

            <div className='from-group'>
                <input type="text" name="email" className="form-control" placeholder='tu email' autoComplete='off' value={email} onChange={handleInputChange} />
            </div>


        {
            (name === '123') && <Message />
        }

        </div>
    )
}
