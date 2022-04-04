
import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

export const RegisterPage = () => {

    const {formData, handleChange, handleReset, isValidEmail, name, email, password1, password2} = useForm({
        name:'',
        email:'',
        password1:'',
        password2:''
    })
    

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        
       console.log(formData);
    }





  return (
    <div>
        <h1>Register Pages</h1>


        <form noValidate onSubmit={handleSubmit} autoComplete="off" >
            <input type="text" name="name" placeholder="name" value={name} onChange={ handleChange}  className={`${name.trim().length <= 0 && 'has-error'}`} />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}
                
            <input type="email" name="email"  placeholder="email" value={email} onChange={ handleChange} className={`${!isValidEmail(email) && 'has-error'}`} />
                {!isValidEmail(email) && <span>Email no valido</span>}
            
            <input type="password" name="password1"  placeholder="password"value={password1} onChange={handleChange} />
            {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
            {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe de tener 6 caracteres</span>}

            <input type="password" name="password2" placeholder="repeat password"value={password2}  onChange={ handleChange}/>
            {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
            {password2.trim().length > 0 && password1 !== password2  && <span>Las contraseñas deben de ser iguales</span>}

            <button type="submit" >submit</button>
        </form>
        <button onClick={handleReset} > rESTTTT</button>
    </div>
  )
}
