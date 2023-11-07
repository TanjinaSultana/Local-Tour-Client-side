/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleManageServices from './SingleManageServices';
import { AuthContext } from '../../../firebase/AuthProvider';

const ManageService = () => {
const {user} = useContext(AuthContext)
const email = user?.email;
console.log(email);
    const [services,setServices] = useState([])
    //const {providerEmail} =useParams()
    const data = useLoaderData();
    console.log(data);
   
   useEffect(()=>{
    const remaining = data?.filter((item) => 
    item.providerEmail === email )
   
    setServices(remaining);
   },[data,email])

     
    
    return (
        <div>
            
            <h2 className="text-xl font-semibold text-center my-4">Your Services</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>

            {
                services?.map((item) => <SingleManageServices 
                key={item._id} 
                service={item}
                 services={services}
                 setServices={setServices}></SingleManageServices>)
            }
            </div>
        </div>
    );
};

export default ManageService;