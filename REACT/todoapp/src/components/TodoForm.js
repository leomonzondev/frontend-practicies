import React, { useState } from 'react'


const initialFormValues = {
    title:"",
    description:""
}


const TodoForm = () => {

    const [formValues, setFormValues] = useState(initialFormValues)

    const { title, description } = formValues;



    return (
        <div>
            <h1>Nueva tarea</h1>
            <form>
                <input
                    type="text"
                    placeholder="Titulo"
                    className="form-control"
                    value={title}
                    />

                <textarea
                    placeholder="Descripcion" className="form-control mt-2"
                    value={description}
                    ></textarea>

                <button
                    className="btn btn-primary btn-block mt-2">Agregar tarea</button>
            </form>
        </div>
    )
}

export default TodoForm
