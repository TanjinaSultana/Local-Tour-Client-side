// /* eslint-disable no-undef */
// /* eslint-disable react/prop-types */

// import { useState } from 'react';
// import Swal from 'sweetalert2';
// import UpdateService from './updateService';
// import toast from 'react-hot-toast';


// const SingleManageServices = ({service}) => {
//     const [isOpen,setIsOpen] = useState(false);
//    // console.log(services,setService);
   
//    const [services,setServices] = useState([service])
//    console.log(service);
//     const {serviceName,image,price,area,_id} = service;
// const handleDelete = (_id) => {
    
//     // fetch(`http://localhost:5000/service/${_id}`,{
//     //     method:'DELETE'
//     // })
//     // .then(res=> res.json())
//     // .then(data =>  {
//     //     if(data.deletedCount>0){
//     //         toast.success("data deleted succes");
//     //         const remaining = services.filter(user=> user._id !== _id)
//     //         setServices(remaining)
//     //     }
//     // } 
//     // )
//         // Swal.fire({
//         //     title: 'Are you sure?',
//         //         text: "You won't be able to revert this!",
//         //         icon: 'warning',
//         //         showCancelButton: true,
//         //         confirmButtonColor: '#3085d6',
//         //         cancelButtonColor: '#d33',
//         //         confirmButtonText: 'Yes, delete it!'
//         // }).then((result) => {
//         //     if (result.isConfirmed) {
//         //         fetch(`http://localhost:5000/service/${id}`, {
//         //             method: 'DELETE'
//         //         })
//         //         .then(res => res.json())
//         //         .then(data => {
//         //             if (data.deletedCount > 0) {
//         //                 Swal.fire(
//         //                     'Deleted!',
//         //                     'Your Service has been deleted.',
//         //                     'success'
//         //                 );
    
//         //                 // Update the state of services in the parent component
//         //                 const remaining = services.filter(service => service._id !== id);
//         //                 setServices(remaining);
//         //                 console.log(remaining);
//         //                 console.log(services);
//         //             }
//         //         });
//         //     }
//         // });
    
    
    
//     // Swal.fire({
//     //     title: 'Are you sure?',
//     //     text: "You won't be able to revert this!",
//     //     icon: 'warning',
//     //     showCancelButton: true,
//     //     confirmButtonColor: '#3085d6',
//     //     cancelButtonColor: '#d33',
//     //     confirmButtonText: 'Yes, delete it!'
//     //   }).then((result) => {
//     //     if (result.isConfirmed) {
         
//     //       fetch(`http://localhost:5000/service/${id}`,{
//     //         method:'DELETE'
//     //       })
//     //       .then(res=>res.json())
//     //       .then(data =>{


//     //           console.log(data)
//     //           console.log(service._id);
//     //           console.log(id);
//     //           if(data.deletedCount>0){
//     //             Swal.fire(
//     //                 'Deleted!',
//     //                 'Your Service has been deleted.',
//     //                 'success'
//     //               ) 
//     //               const remaining = services.filter(service => service._id !== id )
//     //               setService(remaining);
//     //           }
//     //       }
//     //         )
//     //     }
//     //   })
// }
// const handleUpdateBtn = () =>{
// setIsOpen(true)
// // 	<button className="absolute top-2 right-2">
// // 		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-6 h-6">
// // 			<polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
// // 		</svg>
// // 	</button>
// // 	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 fill-current shrink-0 dark:text-violet-400">
// // 		<path d="M68.328,383.063a31.654,31.654,0,0,1,.207-32.118l50.883-86.406,11.516,50.76,31.207-7.08L138.257,202.944,32.983,226.828l7.08,31.207,53.149-12.058L40.96,334.707a64,64,0,0,0,55.149,96.476h82.435l32-32H96.109A31.655,31.655,0,0,1,68.328,383.063Z"></path>
// // 		<path d="M283.379,79.762l53.747,91.268-49.053-7.653-4.934,31.617L389.8,211.635l16.64-106.66-31.617-4.933-8.873,56.87L310.954,63.524a64,64,0,0,0-110.3,0l-39.939,67.82,10.407,45.39,57.106-96.972a32,32,0,0,1,55.148,0Z"></path>
// // 		<path d="M470.65,334.707l-47.867-81.283-41.148-6.812,61.441,104.333A32,32,0,0,1,415.5,399.183H304.046l38.359-38.358L319.778,338.2l-76.332,76.332,76.332,76.333,22.627-22.628-37.052-37.051H415.5a64,64,0,0,0,55.149-96.476Z"></path>
// // 	</svg>
// // 	<h2 className="text-2xl font-semibold leadi tracki">Quis vel eros donec ac odio tempor.</h2>
// // 	<p className="flex-1 text-center dark:text-gray-400">Tempora ipsa quod magnam non, dolores nemo optio. Praesentium soluta maiores non itaque aliquam sint.</p>
// // 	<button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-violet-400 dark:text-gray-900">Start recycling</button>
// // </div>  

// }
// const closeModal = ()=>{
//     setIsOpen(false)
// }
    
//     return (
                      

//         <div className='flex justify-center '>
           
//             <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 rounded-lg">
// 	<ul className="flex flex-col divide-y divide-gray-700 w-[520px]">
// 		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
// 			<div className="flex w-full space-x-2 sm:space-x-4">
// 				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={image}alt="Services" />
// 				<div className="flex flex-col justify-between w-full pb-4">
// 					<div className="flex justify-between w-full pb-2 space-x-2">
// 						<div className="space-y-1">
// 							<h3 className="text-lg font-semibold leadi sm:pr-8">{serviceName}</h3>
// 							<p className="text-sm dark:text-gray-400">{area}</p>
// 						</div>
// 						<div className="text-right">
// 							<p className="text-lg font-semibold">{price}€</p>
// 							{/* <p className="text-sm line-through dark:text-gray-600">75.50€</p> */}
// 						</div>
// 					</div>
// 					<div className="flex text-sm divide-x">
// 						<button onClick={()=>handleDelete(_id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
// 							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
// 								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
// 								<rect width="32" height="200" x="168" y="216"></rect>
// 								<rect width="32" height="200" x="240" y="216"></rect>
// 								<rect width="32" height="200" x="312" y="216"></rect>
// 								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
// 							</svg>
// 							<span >Remove</span>
// 						</button>
// 						{/* <button type="button" className="flex items-center px-2 py-1 space-x-1">
// 							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
// 								<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
// 							</svg>
// 							<span>Add to favorites</span>
// 						</button> */}
// 					</div>
// 				</div>
// 			</div>
// 		</li>
// 		</ul>
// 	<div className="flex justify-end space-x-4">
// 		{/* <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
// 			<span className="sr-only sm:not-sr-only">to shop</span>
// 		</button> */}
// 		<button onClick={() => handleUpdateBtn()} type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
// 			<span className="sr-only sm:not-sr-only">Update</span>
// 		</button>
        
//                 <UpdateService open ={isOpen} close={closeModal} service={service}></UpdateService>
        
// 	</div>
// </div>
//         </div>
                       
//     );
// };

// export default SingleManageServices;