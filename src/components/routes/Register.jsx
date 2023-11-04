/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="my-20  flex justify-center ">
           <div className="w-full flex flex-col max-w-md p-8 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Register</h1>
		<p className="text-sm dark:text-gray-400">Register to access your account</p>
	</div>
	<form novalidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label for="name" className="block mb-2 text-sm">Name</label>
				<input type="name" name="name" id="name" placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<label for="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="Email Address" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<label for="photo" className="block mb-2 text-sm">Photo Url</label>
				<input type="text" name="photo" id="photo" placeholder="Enter Your Photo Url" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Password</label>
					
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Register</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
				<Link to='/login' rel="noopener noreferrer"  className="hover:underline dark:text-violet-400">Login</Link>
			</p>
		</div>
	</form>
</div> 
        </div>
    );
};

export default Register;