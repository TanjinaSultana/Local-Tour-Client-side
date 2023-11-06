import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from './Services';

const Service = () => {
    const[show,setShow] = useState(false);
    const data = useLoaderData();
    const service = data.slice(0,6);
    const services = show ? data : service
   
   
    return (
        <div className='my-24'>
            <div className='flex flex-col justify-center items-center gap-10'>
  
           {
                    services?.map(service =>(
                        <Services key={service._id} service={service}></Services>
                    ))
                    
            }
            
{data.length >6 && !show && (

<button onClick={()=> setShow(true)}>Show All</button> 
)
}
            </div>
        </div>
    );
};

export default Service;