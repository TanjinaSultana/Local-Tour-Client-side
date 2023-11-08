/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/no-unknown-property */

import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {
	const {signUp,handleUpdateProfile} = useContext(AuthContext)
	const [name,setName] = useState("");
	const [email,setEmail] = useState("");
	const [image,setImage] = useState("");
	const [password,setPassword] = useState("");
	const [error,setError] = useState("");
	const navigate = useNavigate()
	const location = useLocation();
    useEffect(() => {
        document.title = `Local Tour & Guide | ${location.pathname}`;
      }, [location.pathname]);
	const handleRegister = (e) =>{
		e.preventDefault();
		if (/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)        ) {
			setError("")
 
			if(email){
 
				signUp(email,password)
				.then(result => {
				 handleUpdateProfile(name,image)
				 .then(() => {
				   toast.success("User Created Successfully");
				   navigate('/')
				 })
				})
				.catch(err => {
				 toast.error(err.message)
				})
			}
		   } else {
			 setError("Minimum 6 length,One capital Letter,a special chracter")
		   }
	}
    return (
        <div className="my-20  flex justify-center ">
           <div className="w-full flex flex-col max-w-md p-8 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Register</h1>
		<p className="text-sm dark:text-gray-400">Register to access your account</p>
	</div>
	<form action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label for="name" className="block mb-2 text-sm">Name</label>
				<input onChange={(e) =>
setName(e.target.value)} type="name" name="name" id="name" placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<label for="email" className="block mb-2 text-sm">Email address</label>
				<input onChange={(e) =>
setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email Address" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<label for="photo" className="block mb-2 text-sm">Photo Url</label>
				<input onChange={(e) =>
setImage(e.target.value)} type="text" name="photo" id="photo" placeholder="Enter Your Photo Url" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Password</label>
					
				</div>
				<input onChange={(e) =>
setPassword(e.target.value)} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<p className="text-red-500 mt-2">{error}</p>
		</div>
		<div className="space-y-2">
			<div>
				<button onClick={handleRegister} type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Register</button>
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