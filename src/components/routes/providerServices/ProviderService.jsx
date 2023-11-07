import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../firebase/AuthProvider';
import SingleProviderService from './SingleProviderService';

const ProviderService = () => {
    const {user} = useContext(AuthContext)
const email = user?.email;
console.log(email);
    const [services,setServices] = useState([])
    const data = useLoaderData();
    useEffect(()=>{
        const remaining = data?.filter((item) => 
        item.providerEmail === email )
       
        setServices(remaining);
       },[data,email])
       const handleStatus = _id =>{
        fetch(`http://localhost:5000/service/${_id}`,{
            method:'PATCH',
            headers :{
                'content-type':'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
        .then(res => {
             return res.json()
        }
        )
        .then(data =>{
            console.log(data);
            if(data && data.modifiedCount>0){
                const remaining = services.filter(service => service._id !== _id)
                const updated = services.find(service => service._id === _id);
                updated.status ='confirm'
               const newBooking = [updated, ...remaining]
               setServices(newBooking);
               
                // Swal.fire({
                // 	title: "Good job!",
                // 	text: "You Confirmed the Service",
                // 	icon: "success"
                //   });
                  
            }
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    } 

    return (
        <div>
              <h2 className="text-xl font-semibold text-center my-4">Your Services</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>

            {
                services?.map((item) => <SingleProviderService
                key={item._id} 
                service={item}
                 services={services}
                 handleStatus ={handleStatus}
                 setServices={setServices}></SingleProviderService>)
            }
</div>
        </div>
    );
};

export default ProviderService;