/* eslint-disable react/prop-types */
import React from 'react';
import Swal from 'sweetalert2';

const UpdateService = ({open,close,service}) => {
    const {_id,serviceName,name,image,providerEmail,area,price,shortDesc,providerImage} = service;
    if(!open){
        return null;
    }
    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const providerEmail = form.providerEmail.value;
        const image = form.image.value;
        const serviceName = form.serviceName.value;
        const area = form.area.value;
        const shortDesc = form.shortDesc.value;
        const price = form.price.value;
        // const rating = form.Rating.value;
        const updateProduct = {serviceName,name,image,providerEmail,area,price,shortDesc};
        fetch(`http://localhost:5000/service/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(updateProduct)
        })
          .then(res =>res.json() )
          .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire(
                    'Good job!',
                    'Your Services Are Updated!',
                    'success'
                  )
            }
          })
    }
   // console.log(service);
    return (
        <div>
            <div className="relative  flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<button onClick={close} className="absolute top-2 right-2">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-6 h-6">
			<polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
		</svg>
	</button>

	{/* <h2 className="text-2xl font-semibold leadi tracki">Quis vel eros donec ac odio tempor.</h2>
	<p className="flex-1 text-center dark:text-gray-400">Tempora ipsa quod magnam non, dolores nemo optio. Praesentium soluta maiores non itaque aliquam sint.</p>
	<button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-violet-400 dark:text-gray-900">Start recycling</button> */}
       <section className="p-6 ">
	<form  onSubmit={handleUpdate} className="container flex flex-col mx-auto space-y-12">
		<fieldset  className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Service Name</label>
					<input  id="name" defaultValue={serviceName} name="serviceName" type="text" placeholder="Service Name" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Service Image</label>
					<input  id="photo" name="image" defaultValue={image} type="text" placeholder="Service Image" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Service Image</label>
					<input  id="photo" name="image" defaultValue={providerImage} type="text" placeholder="Service Image" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">providerEmail</label>
					<input id="providerEmail" name="providerEmail" type="providerEmail" defaultValue={providerEmail} placeholder="providerEmail" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly />
				</div>
				
				<div className="col-span-full sm:col-span-3">
                <div>
				<label htmlFor="name" className="block mb-2 text-sm">Name</label>
				<input  type="name" name="name" defaultValue={name} id="name" placeholder="Enter Your Name" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly />
			</div>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Service Area</label>
					<input id="address" name="area" defaultValue={area} type="text" placeholder="Service Area" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Price</label>
					<input  id="price" name="price" defaultValue={price} type="number" placeholder="Service Price" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Short Description</label>
					{/* <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" /> */}
                <textarea defaultValue={shortDesc} name="shortDesc"  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" rows="4" cols="50" maxLength="100" placeholder="Enter Description"></textarea>
				</div>
                <div className="col-span-full sm:col-span-6  flex justify-center">

				<button  className="btn px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800" >Updated</button>
                </div>
			</div>
		</fieldset>
			
		
	</form>
</section>
</div>
        </div>
    );
};

export default UpdateService;