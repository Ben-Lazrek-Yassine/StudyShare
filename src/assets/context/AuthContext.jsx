import React, {createContext, useContext, useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {
        currentUser,
        setCurrentUser,
        signInWithPopup
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}
