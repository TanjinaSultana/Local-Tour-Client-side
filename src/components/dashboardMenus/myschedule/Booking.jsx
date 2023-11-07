/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */


const Booking = ({services}) => {
    const {serviceName,name,image,email,date,userEmail,price,providerImage,area} = services;
    return (
        <div>
         <tbody className="border-b dark:bg-gray-900 dark:border-gray-700 ">
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
						<p>{email}</p>
					</td>
					<td className= "px-3 py-2 w-[100px]">
						<p>{area}</p>
						
					</td>
					
				</tr>
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
			</tbody>
			
        </div>
    );
};

export default Booking;