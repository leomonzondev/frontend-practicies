import React, { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../Hooks/useUsuarios';

export const Usuarios = () => {

    const { usuarios, pagAnterior, pagSiguiente } = useUsuarios()


    const renderItem = ( { id, first_name, last_name, email, avatar}: Usuario ) => {
        return (
            <tr key={id.toString()}>
                <th>
                    <img
                        style={{
                            width:50,
                            borderRadius:100
                        }}
                        src={avatar}
                        alt={first_name} />
                </th>
                <th>{first_name} {last_name}</th>
                <th>{email}</th>
            </tr>            
        )
    }


    return (
        <div>
            <h3>Usuarios</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( renderItem )
                    }
                </tbody>
            </table>


            <button
                onClick={ pagAnterior }
                className='btn btn-primary'
            >Anteriores</button>
            &nbsp;
            <button
                onClick={ pagSiguiente }
                className='btn btn-primary'
            >Siguiente</button>
        </div>
    )
};
