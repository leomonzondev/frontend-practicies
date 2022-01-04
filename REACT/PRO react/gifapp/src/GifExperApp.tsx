import { useState } from "react"

export const App = () => {

    const [categories, setCategories] = useState([])

    return (
        <div>
            <h2>Gif App</h2>
            <hr/>

        <ol>
            {
                categories.map( category => {
                    return <li key= { category }> { category } </li>
                })
            }
        </ol>

        </div>
    )
}
