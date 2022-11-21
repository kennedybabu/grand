import React, { Children, createContext, useContext, useEffect, useState } from "react";
import {auth} from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'

const AuthContext = createContext()

export function AuthContextProvider({childreb}) {
    const [user, setUser] = useState({})


    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    return (
        <AuthContextProvider value={{signUp, user}}>
            {Children}
        </AuthContextProvider>
    )
}


export function UserAuth() {
    return useContext(AuthContext)
}