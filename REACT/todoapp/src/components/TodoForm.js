import React, { useEffect, useState } from 'react'


const initialFormValues = {
    title:"",
    description:""
}


const TodoForm = ({todoAdd,todoEdit, setTodoEdit, todoUpdate}) => {

    const [formValues, setFormValues] = useState(initialFormValues)
    const { title, description } = formValues;
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)


    useEffect(() => {
        if(todoEdit) {
        setFormValues(todoEdit)}
    },[todoEdit])


    const handleInputChange = (e) => {

        const changedFormValues = {
            ...formValues,
            [e.target.name] : e.target.value
        }

        setFormValues(changedFormValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(title.trim() === '' ) {
            setError('Debes indicar un titulo')
            return;
        }

        if (todoEdit) {
            todoUpdate(formValues)
            setSuccessMessage('Actualizado con éxito')
            setFormValues(initialFormValues)
            setTodoEdit()
        } else {
            todoAdd(formValues)
            setSuccessMessage('Agregado con éxito')
        }
        
        setTimeout(() => {
            setSuccessMessage(null)
        }, 3000)

        setError(null)
    }

    const handleCancel = () => {
        setFormValues(initialFormValues)
        setTodoEdit()
    }

    return (
        <div>
            <h1 className=" text-center display-4">{todoEdit ? 'Editar tarea' : 'Nueva tarea'}</h1>

            {
                todoEdit && 

                    <button
                        onClick={() => handleCancel() }
                        className="btn btn-sm btn-warning mb-2">Cancelar edición</button>
            }

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Titulo"
                    className="form-control"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                    />

                <textarea
                    placeholder="Descripcion" className="form-control mt-2"
                    value={description}
                    name="description"
                    onChange={handleInputChange}
                    ></textarea>

                <button
                    
                    className="btn btn-primary btn-block mt-2">{todoEdit ? 'Editar tarea' : 'Agregar tarea'}</button>
            </form>

            {
                error &&
                (
                    <div className='alert alert-danger mt-2'>
                        { error }
                    </div>
                )
                
            }

            {
                successMessage &&
                (
                    <div className='alert alert-success mt-2'>
                        { successMessage }
                    </div>
                )
            }

        </div>
    )
}

export default TodoForm
