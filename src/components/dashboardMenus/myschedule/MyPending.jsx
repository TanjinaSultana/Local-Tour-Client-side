/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';

const MyPending = ({services}) => {
    console.log(services);
    const {serviceName,name,image,email,date,providerEmail,price,providerImage,area,status} = services;
    return (
        <div>
           	<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
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
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>{status}</span>
						</span>
					</td>
				</tr>
        </div>
    );
};

export default MyPending;