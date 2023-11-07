/* eslint-disable react/prop-types */
import React from 'react';

const SingleProviderService = ({services,handleStatus}) => {
    console.log(services);
    const {serviceName,image,price,area,_id,status} = services;
    return (
        <div>
               <div className='flex justify-center '>
           
           <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 rounded-lg">
   <ul className="flex flex-col divide-y divide-gray-700 w-[520px]">
       <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
           <div className="flex w-full space-x-2 sm:space-x-4">
               <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={image}alt="Services" />
               <div className="flex flex-col justify-between w-full pb-4">
                   <div className="flex justify-between w-full pb-2 space-x-2">
                       <div className="space-y-1">
                           <h3 className="text-lg font-semibold leadi sm:pr-8">{serviceName}</h3>
                           <p className="text-sm dark:text-gray-400">{area}</p>
                       </div>
                       <div className="text-right">
                           <p className="text-lg font-semibold">{price}€</p>
                           {/* <p className="text-sm line-through dark:text-gray-600">75.50€</p> */}
                       </div>
                   </div>
                   <div className="flex text-sm divide-x">
                   </div>
               </div>
           </div>
       </li>
       </ul>
   <div className="flex justify-end space-x-4">
       {/* <Link to={`/${_id}`}>
           <button type="button" className="flex items-center justify-end  p-1 space-x-1.5">
               View Details
           </button>
   </Link> */}
       {
           
           status === 'confirm'
           ?
       <button onClick={()=> handleStatus(_id)}  type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
           <span className="sr-only sm:not-sr-only">Completed</span>
       </button>
           :
           <span>Pending</span>
       }
       
           
       
   </div>
</div>
       </div>
        </div>
    );
};

export default SingleProviderService;