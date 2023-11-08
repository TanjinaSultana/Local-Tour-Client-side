import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../firebase/AuthProvider';
import SingleProviderService from './SingleProviderService';
import UserServices from './UserServices';

const ProviderService = () => {
    const {user} = useContext(AuthContext);
    const email = user?.email;
    const[show,setShow] = useState(false);
    const[searchValue,setSearchValue] = useState('');
    const[search,setSearch] = useState(false);
    const [serviceEmail,setServiceEmail] = useState({})
    console.log(email);
    const data = useLoaderData();
    const [service,setService] =useState(data)
const serviceData = data.slice(0,6);
const services = show ? data : serviceData


const location = useLocation();
useEffect(() => {
    document.title = `Local Tour & Guide | ${location.pathname}`;
  }, [location.pathname]);

  const handleInputValue = (e) =>{
    setSearchValue(e.target.value);
   }

   const handleBtn = () =>{
    // const remaining =data?.filter(item =>
    //     item.providerEmail.toLowerCase() === searchValue.toLowerCase()
    //     );
    const remaining =data.filter(item =>
        item.providerEmail.toLowerCase() === searchValue.toLowerCase()
        );
        console.log(remaining);
        setServiceEmail(remaining);
         setSearch(true);
         setSearchValue("");

   }
    useEffect(()=>{
        const remaining = data?.filter((item) => 
        item.providerEmail === email )
       
        setService(remaining);
       },[data,email])
     
    
    // //    const handleStatus = _id =>{
    //     fetch(`https://service-server-side-three.vercel.app/service/${_id}`,{
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
              <h2 className="text-xl font-semibold text-center my-4">All Services</h2>
              <div className=' flex justify-center my-10'>

     <input type="text" placeholder="Search here" value={searchValue} onChange={handleInputValue}  className="input bg-[#EAEBF0] text-black  border-[#DEDEDE] w-48 lg:w-72 mt-5 h-[60px] rounded-none border-right-0  p-5" />
    <button className="btn px-4 bg-[#5E6284] h-[60px] mt-[20px]  text-white rounded-none  text-sm lg:text-lg  font-normal normal-case" onClick={handleBtn}>Search</button>
</div>
{
    search?(
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
        {
     serviceEmail?.map((item) => <SingleProviderService
    key={item._id} 
    service={item}
     services={item}
    ></SingleProviderService>)
        }
<div className=' flex flex-col'>

<h1 className='text-center flex justify-center text-2xl font-bold'>{user?.email} Services</h1>
{
    serviceEmail?.map((item) => <UserServices
    key={item._id} 
        services={item}
    >

    </UserServices>)
}

</div>

</div>

    


    ):(     
 <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
    {
 services.map((item) => <SingleProviderService
key={item._id} 
service={item}
 services={item}
></SingleProviderService>)
    }

<div className=' flex flex-col'>

<h1 className='text-center flex justify-center text-2xl font-bold'>{user?.email} Services</h1>
<div className='grid grid-cols-1 lg:grid-cols-1 gap-5 '>

{
service.map((item) => <UserServices
key={item._id} 
    services={item}
>

</UserServices>)
}
</div>

</div>

</div>)
}
           
   


        </div>
    );
};

export default ProviderService;