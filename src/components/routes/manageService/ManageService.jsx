/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
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
    const location = useLocation();
    useEffect(() => {
        document.title = `Local Tour & Guide | ${location.pathname}`;
      }, [location.pathname]);
   useEffect(()=>{
    const remaining = data?.filter((item) => 
    item.providerEmail === email )
   
    setServices(remaining);
   },[data,email])

//    const handleStatus = _id =>{
// 	fetch(`https://service-server-side-three.vercel.app/service/${_id}`,{
// 		method:'PATCH',
// 		headers :{
// 			'content-type':'application/json'
// 		},
// 		body: JSON.stringify({status:'confirm'})
// 	})
// 	.then(res => {
// 		 return res.json()
// 	}
// 	)
// 	.then(data =>{
// 		console.log(data);
// 		if(data && data.modifiedCount>0){
// 			const remaining = services.filter(service => service._id !== _id)
// 			const updated = services.find(service => service._id === _id);
//             updated.status ='confirm'
//            const newBooking = [updated, ...remaining]
//            setServices(newBooking);
           
// 			// Swal.fire({
// 			// 	title: "Good job!",
// 			// 	text: "You Confirmed the Service",
// 			// 	icon: "success"
// 			//   });
			  
// 		}
// 	})
// 	.catch((error) => {
// 		console.error('Error:', error);
// 	  });
// }
    
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