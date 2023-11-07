/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({service}) => {
    const {serviceName,image,price,area,_id,providerImage,name,shortDesc} = service;
    return (
        <div>
            <div className="rounded-lg shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100">
	
	<img src={image} alt="" className=" rounded-lg object-cover object-center w-full h-72 dark:bg-gray-500" />
	<div className="p-3">
		<div className="flex items-center justify-between">
			<div className="flex items-center space-x-3">
				<h1 className='font-bold'>{serviceName}</h1>
			</div>
			<button type="button" title="Bookmark post" className="flex items-center justify-center">
				<span>${price}</span>
			</button>
		</div>
		<div className="flex flex-wrap items-center pt-3 pb-1">
			<div className="flex items-center space-x-2">
				<div className="flex -space-x-1">
					<p className='font-sm'>{shortDesc}</p>
				</div>
                <br></br>
				
			</div>
		</div>
		<div className="space-y-3">
			<p className="text-sm">
				<span className="text-base font-semibold"><p>{area}</p></span>
			</p>
			
		</div>
        <div className="flex items-center justify-between p-3">
		<div className="flex text-sm divide-x">
						<button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
							
                        <img alt="" src={providerImage} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
						</button>
						<button type="button" className="flex items-center px-2 py-1 space-x-1">
							
							<span>{name}</span>
						</button>
					</div>
		<button title="Open options" type="button">
			
		</button>
		<Link to={`/${_id}`}>
    <button type="button" className="flex items-center justify-end  p-1 space-x-1.5">
				View Details
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
			</button>
		</Link>
	</div>
	</div>
</div>
        </div>
    );
};

export default Services;