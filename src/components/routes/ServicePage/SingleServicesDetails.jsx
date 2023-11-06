/* eslint-disable react/prop-types */
import { useState } from "react";
import SingleModal from "./SingleModal";


const SingleServicesDetails = ({services}) => {
    const [isOpen,setIsOpen] = useState(false);
    const {serviceName,image,price,area,_id,providerImage,name,shortDesc} = services;
    const handleBookBtn = () =>{
        setIsOpen(true)
        
        }
        const closeModal = ()=>{
            setIsOpen(false)
        }
    return (
        <div>
            <section className="my-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col  items-center p-4 mx-auto space-y-6 md:p-8">
		<img src={image}></img>
        <h1>{serviceName}</h1>
		<p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-300">{shortDesc}</p>
        <p>{price}</p>
		<div className="flex justify-center space-x-3">
			<img src={providerImage} alt="" className="w-20 h-20 bg-center bg-cover rounded-md dark:bg-gray-500 dark:bg-gray-700" />
			<div>
				<p className="leadi">{name}</p>
				<p className="text-sm leadi dark:text-gray-300">{area}</p>
				<a className="flex items-center py-2 space-x-1 text-sm dark:text-violet-400" href="/">
					<span>Read full story</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
		</div>
        
        <button onClick={() => handleBookBtn()} type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
			<span className="sr-only sm:not-sr-only">Book Now</span>
		</button>
        
                <SingleModal open ={isOpen} close={closeModal} service={services}></ SingleModal>
	</div>
</section>
        </div>
    );
};

export default SingleServicesDetails;