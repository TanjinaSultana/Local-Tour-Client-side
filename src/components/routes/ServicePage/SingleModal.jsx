/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../../../firebase/AuthProvider';
import toast from 'react-hot-toast';

const SingleModal = ({service,open,close}) => {
    const {user} = useContext(AuthContext)
    const {_id,serviceName,name,image,providerEmail,price,providerImage} = service;
  
    if(!open){
        return null;
    }
    const handleBook = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const providerEmail = form.providerEmail.value;
        const email = form.email.value;
        const image = form.image.value;
        const providerImage = form.providerImage.value;
        const serviceName = form.serviceName.value;
        const area = form.area.value;
        const date = form.date.value;
        
        const price = form.price.value;
        // const rating = form.Rating.value;
        const updateProduct = {serviceName,name,providerImage,email,image,providerEmail,area,price,date};
        
        fetch('http://localhost:5000/userService',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(updateProduct)
          })
          .then(res =>res.json() )
          .then(data=>{
            console.log(data);
            if(data.insertedId){
              toast.success("Data Added successfully");
            }
          })
    }
   
    return (
        <div>
             <div>
            <div className="relative  flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<button onClick={close} className="absolute top-2 right-2">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-6 h-6">
			<polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
		</svg>
	</button>
       <section className="p-6 ">
	<form  onSubmit={handleBook} className="container flex flex-col mx-auto space-y-12">
		<fieldset  className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-bold text-xl ">Book Service</p>
				
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Service Name</label>
					<input  id="serviceName" defaultValue={serviceName} name="serviceName" type="text" placeholder="Service Name" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Service Image</label>
					<input  id="photo" name="image" defaultValue={image} type="text" placeholder="Service Image" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Provider Image</label>
					<input  id="providerImage" name="providerImage" defaultValue={providerImage} type="text" placeholder="Service Image" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Provider Email</label>
					<input id="providerEmail" name="providerEmail" type="providerEmail" defaultValue={providerEmail} placeholder="providerEmail" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">User Email</label>
					<input id="email" name="email" type="providerEmail" defaultValue={user?.email} placeholder="providerEmail" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly />
				</div>
				
				<div className="col-span-full sm:col-span-3">
                <div>
				<label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
				<input  type="name" name="name" defaultValue={name} id="name" placeholder="Enter Your Name" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly />
			</div>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Service Area</label>
					<input id="address" name="area"  type="text" placeholder="Service Area" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Service Taking Date</label>
					<input id="date" name="date"  type="date" placeholder="Service Taking Date" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Price</label>
					<input  id="price" name="price" defaultValue={price} type="number" placeholder="Service Price" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly />
				</div>
				{/* <div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Short Description</label>
					<input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                <textarea defaultValue={shortDesc} name="shortDesc"  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" rows="4" cols="50" maxLength="100" placeholder="Enter Description"></textarea>
				</div>  */}
                <div className="col-span-full sm:col-span-6  flex justify-center">

				<button  className="btn px-8 py-3 font-semibold rounded text-white bg-[#5E6284]  " >Purchase Button</button>
                </div>
			</div>
		</fieldset>
			
		
	</form>
</section>
</div>
        </div>
        </div>
    );
};

export default SingleModal;