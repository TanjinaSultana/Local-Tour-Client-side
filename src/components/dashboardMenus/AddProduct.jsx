/* eslint-disable react/no-unknown-property */

import { useContext, useEffect, useState } from "react";
import  { AuthContext } from "../../firebase/AuthProvider";
//import axios from "axios";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";


const AddProduct = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    console.log(user?.photoURL);
    const [name,setName] = useState(user?.displayName);
    const [serviceName,setServiceName] = useState("");
    const [image,setImage] = useState("");
    const [providerImage,setProviderImage] = useState(user?.photoURL);
    const [providerEmail,setProviderEmail] = useState(user?.email);
    const [area,setArea] = useState("");
    const [price,setPrice] = useState( "");
    const [shortDesc,setShortDesc] = useState("");
    //console.log(name,providerEmail);
    const location = useLocation();
    useEffect(() => {
        document.title = `Local Tour & Guide | ${location.pathname}`;
      }, [location.pathname]);
    const handleAdd = (e) =>{
        e.preventDefault();
       console.log({serviceName,name,image,providerImage,providerEmail,area,price,shortDesc});
       const userData=  {serviceName,name,image,providerEmail,area,price,shortDesc}
    //    axios.post('https://service-server-side-three.vercel.app/product',userData)
    //    .then(res =>{
    //     console.log(res.data);
    //    }  )
    
    fetch('https://service-server-side-three.vercel.app/service',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(userData)
      })
      .then(res =>res.json() )
      .then(data=>{
        console.log(data);
        if(data.insertedId){
          toast.success("Data Added successfully");
        }
      })
    //   axios.post('https://service-server-side-three.vercel.app/product', userData)
    //     .then((res) => {
    //       console.log('Response data:', res.data);
    //     })
    //     .catch((error) => {
    //       console.error('Request failed:', error);
    //     });
      
    }
    return (
        <div>
            <section className="p-6 ">
	<form   className="container flex flex-col mx-auto space-y-12">
		<fieldset  className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  bg-[#EAEBF0]">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Add Service</p>
				
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Service Name</label>
					<input onChange={(e) =>
setServiceName(e.target.value)} id="serviceName" name="serviceName" type="text" placeholder="Service Name" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Service Image</label>
					<input onChange={(e) =>
setImage(e.target.value)} id="photo" name="image" type="text" placeholder="Service Image" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Service Provider Image</label>
					<input onChange={(e) =>
setProviderImage(e.target.value)} id="providerImage" name="providerImage" defaultValue={user?.photoURL} type="text" placeholder="Service Image" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">providerEmail</label>
					<input onChange={(e) =>
setProviderEmail(e.target.value)} id="providerEmail" name="providerEmail" type="providerEmail" defaultValue={user?.email} placeholder="providerEmail" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly />
				</div>
				
				<div className="col-span-full sm:col-span-3">
                <div>
				<label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
				<input onChange={(e) =>
setName(e.target.value)} type="name" name="name" defaultValue={user?.displayName} id="name" placeholder="Enter Your Name" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly />
			</div>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Service Area</label>
					<input onChange={(e) =>
setArea(e.target.value)} id="address" name="area" type="text" placeholder="Service Area" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Price</label>
					<input onChange={(e) =>
setPrice(e.target.value)} id="price" name="price" type="number" placeholder="Service Price" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Short Description</label>
					{/* <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" /> */}
                <textarea onChange={(e) =>
setShortDesc(e.target.value)} name="shortDesc"  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" rows="4" cols="50" maxLength="100" placeholder="Enter Description"></textarea>
				</div>
                <div className="col-span-full sm:col-span-6  flex justify-center">

				<button  className="btn px-8 py-3 font-semibold rounded text-white bg-[#5E6284]" onClick={handleAdd} >Add Service</button>
                </div>
			</div>
		</fieldset>
			
		
	</form>
</section>
        </div>
    );
};

export default AddProduct;