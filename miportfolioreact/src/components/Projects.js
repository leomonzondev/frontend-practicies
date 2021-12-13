import React, { useEffect, useState } from 'react'
import land from '..images/land.jpg'


export const Projects = () => {

    const [cajita, setCajita] = useState([])

    const projects = {
        
        titulo:"asd",
        desc:"asdwdaweweweweewwew",
        link:"#",
    }

    useEffect(() => {
        setCajita([projects])
        console.log(cajita)
    },[])
    

    
    

    return (
        <div className='projects'>
        {land}
            {cajita.map(({titulo,desc}) => (<div className='cajita'>
                <img src={land} alt="asd" />
                <h3>{titulo}</h3>
                <p>{desc}</p>
            </div>))}

        </div>
    )
}
