import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const LoginScreen = () => {


    const {
        handleSubmit,
        register,
        formState: { errors },
     } = useForm()



     const submitHandler = ({ email, password }) => {
        console.log(email,password)
     }



  return (
    <div className='mt-20'>

    <form className='mx-auto max-w-screen-md' onSubmit={handleSubmit(submitHandler)}>
        <h1 className='mb-4 text-2xl'>Login</h1>

        <div className='mb-4'>
            <label htmlFor='email'>Email</label> 
            <input type="email" {...register('email', {required: 'Por favor escribe tu email',
            pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Por favor ingrese un email válido'
            }})} className='w-full' id='email' autoFocus></input>
            {errors.email && (<div className='text-red'>{errors.email.message}</div>)}
        </div>

        <div className='mb-4'>
            <label htmlFor='password'>Password</label> 
            <input type="password" {...register('password', {required: 'Por favor escribe tu contraseña',
            minLength: {
                value: 6,
                message: 'La contraseña tiene que ser más de 5 caracteres'
            }})} className='w-full' id='password' autoFocus></input>
            {errors.password && (<div className='text-red'>{errors.password.message}</div>)}
        </div>

        <div className='mb-4'>
            <button className=' py-2 px-3 primary-button bg-lightAccent-200 dark:bg-darkAccent-200 text-white'>Login</button>
        </div>

        <div className='mb-4'>
            No tenés cuenta? &nbsp;
            <Link href="/register">Registrarme</Link>
        </div>

    </form>

    </div>
  )
}

export default LoginScreen