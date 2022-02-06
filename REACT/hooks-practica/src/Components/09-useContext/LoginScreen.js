import React, {useContext} from 'react';
import { useHref } from 'react-router-dom';
import { UserContext } from './UserContext';

export const LoginScreen = () => {


    const { setUser } = useContext(UserContext)


    const objeto = {
        id:1234,
        name:'Leonardo'
    }



    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>

            <button  onClick={() => setUser(objeto)} >Login</button>
        </div>
    )
};
