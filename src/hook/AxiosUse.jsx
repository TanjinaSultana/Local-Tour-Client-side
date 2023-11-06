/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../firebase/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
})

const AxiosUse = () => {
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res =>{
            return res;
        
        },error =>{
            if(error.response.status === 401 || error.response.status === 403){
                logout()
                .then(()=>{
                    navigate("/login")
                })
                .catch(err =>console.log(err))
            }
            //console.log("logout the user");
        })
    },[])
   return axiosSecure;
};

export default AxiosUse;