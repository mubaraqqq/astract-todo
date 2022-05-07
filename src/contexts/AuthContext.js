import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase-config';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup (email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login (email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        login,
        signup
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
