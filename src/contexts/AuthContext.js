import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../config/firebase-config';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore"; 

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

    function logout () {
        return signOut(auth);
    }

    function addToDoc (userId, obj) {
        return addDoc(collection(db, userId), obj);
    }

    function getTheDocs(userId) {
        return getDocs(collection(db, userId));
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
        logout,
        signup,
        addToDoc,
        getTheDocs
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
