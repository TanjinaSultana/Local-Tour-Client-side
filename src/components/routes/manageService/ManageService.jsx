/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleManageServices from './SingleManageServices';

const ManageService = () => {
    const data = useLoaderData();
   
   
    const [services,setServices] = useState(data)

     
    
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