/* eslint-disable react-hooks/exhaustive-deps */
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
import axios from 'axios';
import AxiosUse from '../hook/AxiosUse';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
    //google sign in
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    };
    //login
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signUp =(email,password) =>{
        setLoading(true)
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
            const userEmail = currentUser?.email || user?.email;
            const logUser = {email : userEmail}
            setUser(currentUser);
            console.log("current",currentUser);
            setLoading(false)
            if(currentUser){
                axios.post('https://service-server-side-three.vercel.app/jwt',logUser,{withCredentials:true})
                .then(res =>{
                    console.log(res.data);
                })
            }
            else{
                axios.post('https://service-server-side-three.vercel.app/logout',logUser,{withCredentials:true})
                .then(res =>{
                    console.log(res.data);
                })
            }
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
        logout,loading

    }
    return (
      <AuthContext.Provider value={AuthInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;