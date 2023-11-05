/* eslint-disable react/no-unknown-property */

import { useContext, useState } from "react";
import  { AuthContext } from "../../firebase/AuthProvider";
//import axios from "axios";
import toast from "react-hot-toast";


const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const [name,setName] = useState(user?.displayName);
    const [serviceName,setServiceName] = useState("");
    const [image,setImage] = useState("");
    const [providerImage,setProviderImage] = useState("");
    const [email,setEmail] = useState(user?.email);
    const [area,setArea] = useState("");
    const [price,setPrice] = useState( "");
    const [shortDesc,setShortDesc] = useState("");
    //console.log(name,email);
    
    const handleAdd = (e) =>{
        e.preventDefault();
       console.log({serviceName,name,image,providerImage,email,area,price,shortDesc});
       const userData=  {serviceName,name,image,email,area,price,shortDesc}
    //    axios.post('http://localhost:5000/product',userData)
    //    .then(res =>{
    //     console.log(res.data);
    //    }  )
    
    fetch('http://localhost:5000/service',{
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
    //   axios.post('http://localhost:5000/product', userData)
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
		<fieldset  className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Service Name</label>
					<input onChange={(e) =>
setServiceName(e.target.value)} id="name" name="serviceName" type="text" placeholder="Service Name" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Service Image</label>
					<input onChange={(e) =>
setImage(e.target.value)} id="photo" name="image" type="text" placeholder="Service Image" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Service Provider Image</label>
					<input onChange={(e) =>
setProviderImage(e.target.value)} id="photo" name="image" type="text" placeholder="Service Image" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Email</label>
					<input onChange={(e) =>
setEmail(e.target.value)} id="email" name="email" type="email" defaultValue={user?.email} placeholder="Email" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly />
				</div>
				
				<div className="col-span-full sm:col-span-3">
                <div>
				<label htmlFor="name" className="block mb-2 text-sm">Name</label>
				<input onChange={(e) =>
setName(e.target.value)} type="name" name="name" defaultValue={user?.displayName} id="name" placeholder="Enter Your Name" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly />
			</div>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Service Area</label>
					<input onChange={(e) =>
setArea(e.target.value)} id="address" name="area" type="text" placeholder="Service Area" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Price</label>
					<input onChange={(e) =>
setPrice(e.target.value)} id="price" name="price" type="number" placeholder="Service Price" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Short Description</label>
					{/* <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" /> */}
                <textarea onChange={(e) =>
setShortDesc(e.target.value)} name="shortDesc"  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" rows="4" cols="50" maxLength="100" placeholder="Enter Description"></textarea>
				</div>
                <div className="col-span-full sm:col-span-6  flex justify-center">

				<button  className="btn px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800" onClick={handleAdd} >Add Service</button>
                </div>
			</div>
		</fieldset>
			
		
	</form>
</section>
        </div>
    );
};

export default AddProduct;