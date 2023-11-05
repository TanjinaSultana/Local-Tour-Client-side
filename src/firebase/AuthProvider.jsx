/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})
    //google sign in
    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider)
    };
    //login
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signUp =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleUpdateProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
        });
        return () =>{
            return unsubscribe();
        }
    },[])
    const logout = () =>{
        return signOut(auth)
    }
    const AuthInfo = {
        googleSignIn,
        signIn,
        signUp,
        handleUpdateProfile,
        signInWithEmailAndPassword,
        user,
        logout

    }
    return (
      <AuthContext.Provider value={AuthInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;