/* eslint-disable react/prop-types */
import React from 'react';
import Swal from 'sweetalert2';

const UpdateService = ({open,close,service}) => {
    const {_id,serviceName,name,image,email,area,price,shortDesc} = service;
    if(!open){
        return null;
    }
    const handleUpdate = (e) =>{
        e.preventDefault();
        // const [name,setName] = useState("");
        // const [serviceName,setServiceName] = useState("");
        // const [image,setImage] = useState("");
        // const [email,setEmail] = useState("");
        // const [area,setArea] = useState("");
        // const [price,setPrice] = useState( "");
        // const [shortDesc,setShortDesc] = useState("");
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const serviceName = form.serviceName.value;
        const area = form.area.value;
        const shortDesc = form.shortDesc.value;
        const price = form.price.value;
        // const rating = form.Rating.value;
        const updateProduct = {serviceName,name,image,email,area,price,shortDesc};
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
	{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 fill-current shrink-0 dark:text-violet-400">
		<path d="M68.328,383.063a31.654,31.654,0,0,1,.207-32.118l50.883-86.406,11.516,50.76,31.207-7.08L138.257,202.944,32.983,226.828l7.08,31.207,53.149-12.058L40.96,334.707a64,64,0,0,0,55.149,96.476h82.435l32-32H96.109A31.655,31.655,0,0,1,68.328,383.063Z"></path>
		<path d="M283.379,79.762l53.747,91.268-49.053-7.653-4.934,31.617L389.8,211.635l16.64-106.66-31.617-4.933-8.873,56.87L310.954,63.524a64,64,0,0,0-110.3,0l-39.939,67.82,10.407,45.39,57.106-96.972a32,32,0,0,1,55.148,0Z"></path>
		<path d="M470.65,334.707l-47.867-81.283-41.148-6.812,61.441,104.333A32,32,0,0,1,415.5,399.183H304.046l38.359-38.358L319.778,338.2l-76.332,76.332,76.332,76.333,22.627-22.628-37.052-37.051H415.5a64,64,0,0,0,55.149-96.476Z"></path>
	</svg> */}
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
					<label  className="text-sm">Email</label>
					<input id="email" name="email" type="email" defaultValue={email} placeholder="Email" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly />
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