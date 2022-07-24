import React, { createContext, useReducer } from "react";
import { Usuario, LoginResponse, loginData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './AuthReducer';
import zenitApi from '../api/zenitApi';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: () => void;
    signIn: ( loginData: loginData ) => void;
    logOut: () => void;
    removeError: () => void;
}

const initialState:AuthState = {

    status:"checking",
    token: null,
    user:null,
    errorMessage:'',

}


export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {


    const [state, dispatch] = useReducer(authReducer, initialState )


    const signIn = async( { correo, password }: loginData ) => {
        try {
            const res = await zenitApi.post<LoginResponse>('/auth/login', { correo, password })
            dispatch
            
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const signUp = () => {};
    const logOut = () => {};
    const removeError = () => {};

    return(
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError}}>
            { children }
        </AuthContext.Provider>
    )
}