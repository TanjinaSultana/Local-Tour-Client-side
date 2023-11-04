/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navvar = () => {
    const [isDropdown,setIsDropdown] = useState(false);
    const dropDown =() =>{
        setIsDropdown(!isDropdown)
    }
    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100 ">
	<div className="container flex justify-between h-16 mx-auto mt-4">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 gap-2">
            <img src="logo.png" className="h-[70px] w-[70px] rounded-full"></img>
            <h1 className="font-medium text-base">Local Tour & Guide</h1>
			
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<NavLink to='/' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</NavLink>
			</li>
			<li className="flex">
				<NavLink to='/services' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Services</NavLink>
			</li>
			<li className="flex">
         
            

				<NavLink to='/dashboard' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Dashboard</NavLink>
			</li>
			{/* <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</a>
			</li> */}
		</ul>
        <div className="dropdown">
		<label onClick={dropDown} tabIndex={0} className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</label>
        {
            isDropdown ?
            <>

        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-black rounded-lg w-52 lg:hidden">
        <li><NavLink to='/' rel="noopener noreferrer" href="#" className="flex items-center px-4 rounded-lg mt-4 bg-white border-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</NavLink></li>
          <li><NavLink to='/services' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Services</NavLink></li>
          </ul>
            </>:
		<div className="items-center flex-shrink-0 hidden lg:flex">
			{/* <button className="self-center px-8 py-3 rounded">Sign in</button> */}
			<NavLink to='/login' className=" btn self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Login</NavLink>
			{/* <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Logout</button> */}
		</div>
        }
        </div>
        
	</div>
</header>
        </div>
    );
};

export default Navvar;