/* eslint-disable react/no-unknown-property */

import { useContext } from "react";
import AuthProvider, { AuthContext } from "../../firebase/AuthProvider";


const AddProduct = () => {
    const {user} = useContext(AuthContext) 
    console.log(user);
    return (
        <div>
            <section className="p-6 ">
	<form action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Service Name</label>
					<input id="name" name="name" type="text" placeholder="Service Name" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Service Image</label>
					<input id="photo" type="text" placeholder="Service Image" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Email</label>
					<input id="email" type="email" defaultValue={user?.email} placeholder="Email" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Name</label>
					<input id="name" type="name" name="name" defaultValue={user?.displayName} placeholder="" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" readOnly />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Service Area</label>
					<input id="address" type="text" placeholder="Service Area" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Price</label>
					<input id="price" type="number" placeholder="Service Price" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Short Description</label>
					{/* <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" /> */}
                <textarea  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" rows="4" cols="50" maxlength="100" placeholder="Enter Description"></textarea>
				</div>
                <div className="col-span-full sm:col-span-6  flex justify-center">

				<button type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">Add Product</button>
                </div>
			</div>
		</fieldset>
		{/* <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="username" className="text-sm">Username</label>
					<input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="website" className="text-sm">Website</label>
					<input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="bio" className="text-sm">Bio</label>
					<textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"></textarea>
				</div>
				<div className="col-span-full">
					<label for="bio" className="text-sm">Photo</label>
					<div className="flex items-center space-x-2">
						<img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
						<button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Change</button>
					</div>
				</div>
			</div>
		</fieldset> */}
	</form>
</section>
        </div>
    );
};

export default AddProduct;