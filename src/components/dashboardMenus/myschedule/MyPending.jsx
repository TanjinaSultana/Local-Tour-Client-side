/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';

const MyPending = ({services}) => {
    console.log(services);
    const {serviceName,name,image,email,providerEmail,price,providerImage,area,status,date} = services;
    return (
        <div>
            <tbody className=" text-white bg-[#5E6284]  ">
				<tr className="">
					<td className="px-3 text-2xl font-medium dark:text-gray-400 w-[100px]">
                        <img src={image} className=" rounded-lg h-[50px] w-[50px]"></img>
                    </td>
					<td className="px-3 py-2  w-[100px] ">
						<p>{serviceName}</p>
					</td>
					<td className="px-3 py-2  w-[100px]">
						<span></span>
						<p className="dark:text-gray-400">{price}</p>
					</td>
					<td className="px-3 py-2 w-[100px]">
						<p>{date}</p>
					</td>
					<td className="px-3 py-2 w-[100px]">
						<p>{providerEmail}</p>
					</td>
					<td className="px-3 py-2 w-[100px]">
						<p>{email}</p>
					</td>
                    
                    
			
			
            <td className="p-3 text-right">
{   status?(
status === 'confirm'
?
<button  type="button" className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
<span className="sr-only sm:not-sr-only">{status}</span>
</button>
:
<span type="button" className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Progress</span>):<span type="button" className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Pending</span>
}
					
				</td>
                </tr>
                </tbody>
				{/* <tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-400"></td>
					<td className="px-3 py-2">
						<p>Richie Allen</p>
					</td>
					<td className="px-3 py-2">
						<span>Geothermal Technician</span>
						<p className="dark:text-gray-400">Icecorps</p>
					</td>
					<td className="px-3 py-2">
						<p>555-129-0761</p>
					</td>
					<td className="px-3 py-2">
						<p>richie@allen.com</p>
					</td>
					<td className="px-3 py-2">
						<p>Knesebeckstrasse 32, Obersteinebach</p>
						<p className="dark:text-gray-400">Germany</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr> */}
			
           	{/* <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<img src={image}></img>
					</td>
					<td className="p-3">
						<p>{serviceName}</p>
					</td>
					<td className="p-3">
						<p>{area}</p>
						
					</td>
					<td className="p-3">
						<p>{providerEmail}</p>
						
					</td>
					<td className="p-3 text-right">
						<p>${price}</p>
					</td>

                    {
			
			
					<td className="p-3 text-right">
{
    status === 'confirm'
    ?
<button  type="button" className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
    <span className="sr-only sm:not-sr-only">Completed</span>
</button>
    :
    <span type="button" className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Pending</span>
}
					</td>
}
				</tr> */}
        </div>
    );
};

export default MyPending;