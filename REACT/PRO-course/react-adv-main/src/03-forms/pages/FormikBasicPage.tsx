import {  useFormik } from 'formik'
import '../styles/styles.css'



export const FormikBasicPage = () => {




    const { handleChange, values, handleSubmit } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        }
    })



  return (
    <div>
        <h1>Formik Basic Tutorial</h1>

        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <label htmlFor='firstName' >First Name</label>
            <input type="text" name='firstName' autoComplete='off'  onChange={ handleChange }  value={values.firstName} />
            <span>First name is requerid</span>


            <label htmlFor='lastName' >Last Name </label>
            <input type="text" name='lastName' onChange={ handleChange }  value={values.lastName}/>
            <span>Last name is requerid</span>

            <label htmlFor='email' >Email</label>
            <input type="email" name='email' onChange={ handleChange }  value={values.email}/>
            <span>Email name is requerid</span>
            <span>Check for a valid email format</span>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
