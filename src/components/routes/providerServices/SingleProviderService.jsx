/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const SingleProviderService = ({services}) => {
    
    const {serviceName,image,price,area,_id,providerImage,name} = services;
    //const {serviceName} = services;
   
    return (
       
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md
        bg-[#EAEBF0] text-black ">
        <div className="flex space-x-4">
            <img alt="" src={providerImage} className="object-cover w-12 h-12 rounded-full shadow" />
            <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{name}</a>
                
            </div>
        </div>
        <div>
            <img src={image} alt="" className="object-cover h-60 sm:h-96 mb-4 rounded-lg   dark:bg-gray-500" />
            <h2 className="mb-1 text-xl font-semibold">{serviceName}</h2>
            
        </div>
        <div className="flex flex-wrap justify-between">
            <div className="space-x-2">
                
            </div>
            <div className="flex space-x-2 text-sm dark:text-gray-400">
                <button type="button" className="flex flex-col items-center -mt-24 p-1 space-x-1.5">
                    <span className='font-bold text-base'>Price:{price}</span>
                    <span className='font-bold text-base'> Area:{area}</span>
                </button>
                
                
                    
                
            </div>
                
        </div>
        <Link to={`/${_id}`}>
                <button type="button" className="flex items-center justify-end  p-1 space-x-1.5">
                    View Details
                </button>
        </Link>
    </div>
    );
};

export default SingleProviderService;