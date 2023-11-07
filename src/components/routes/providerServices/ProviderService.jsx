import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../firebase/AuthProvider';
import SingleProviderService from './SingleProviderService';
import UserServices from './UserServices';

const ProviderService = () => {
    const {user} = useContext(AuthContext);
     const email = user?.email;

const data = useLoaderData();
const [services,setServices] = useState(data)
console.log(services);
    useEffect(()=>{
        const remaining = data?.filter((item) => 
        item.providerEmail === email )
       
        setServices(remaining);
       },[data,email])
    // //    const handleStatus = _id =>{
    //     fetch(`http://localhost:5000/service/${_id}`,{
    //         method:'PATCH',
    //         headers :{
    //             'content-type':'application/json'
    //         },
    //         body: JSON.stringify({status:'confirm'})
    //     })
    //     .then(res => {
    //          return res.json()
    //     }
    //     )
    //     .then(data =>{
    //         console.log(data);
    //         if(data && data.modifiedCount>0){
    //             const remaining = services.filter(service => service._id !== _id)
    //             const updated = services.find(service => service._id === _id);
    //             updated.status ='confirm'
    //            const newBooking = [updated, ...remaining]
    //            setServices(newBooking);
               
    //             // Swal.fire({
    //             // 	title: "Good job!",
    //             // 	text: "You Confirmed the Service",
    //             // 	icon: "success"
    //             //   });
                  
    //         }
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //       });
    // } 

    return (
        <div>
              <h2 className="text-xl font-semibold text-center my-4">Your Services</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                {
             data?.map((item) => <SingleProviderService
            key={item._id} 
            service={item}
             services={item}
            ></SingleProviderService>)
        
    }
    <div className=' flex flex-col'>

    <h1 className='text-center flex justify-center text-2xl font-bold'>{user?.email} Services</h1>
    {
        services?.map((item) => <UserServices
        key={item._id} 
            services={item}
        >

        </UserServices>)
    }
    </div>


</div>
        </div>
    );
};

export default ProviderService;