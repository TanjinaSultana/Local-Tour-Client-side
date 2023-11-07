// /* eslint-disable no-undef */
// import React, { useState } from 'react';
// import toast from 'react-hot-toast';
// //import SingleManageServices from './SingleManageServices';
// import { useLoaderData } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const ManageService = () => {
//     const data = useLoaderData();
   
   
//     const [services,setServices] = useState(data)
// //     console.log(services);

// //     const handleDelete = (_id) => {
// //    fetch(`http://localhost:5000/service/${_id}`,{
// //     method:'DELETE'
// //    })
// //    .then(res=>res.json())
// //    .then(data=>{
    
// //        console.log(data);
// //        if(data?.deletedCount >0){
// //         toast.success("delete")
// //         const remaining = services.filter(service => service._id != _id);
// //         setServices(remaining);
// //         console.log( setServices(remaining));
// //         //this.forceUpdate();
// //        }
// //    }
// //    )
//         // fetch(`http://localhost:5000/service/${_id}`,{
//         //     method:'DELETE'
//         // })
//         // .then(res=> res.json())
//         // .then(data =>  {
//         //     if(data.deletedCount>0){
//         //         toast.success("data deleted succes");
//         //         const remaining = services.filter(user=> user._id !== _id)
//         //         console.log(remaining)
//         //     }
//         // } 
//         //  )
//             // Swal.fire({
//             //     title: 'Are you sure?',
//             //         text: "You won't be able to revert this!",
//             //         icon: 'warning',
//             //         showCancelButton: true,
//             //         confirmButtonColor: '#3085d6',
//             //         cancelButtonColor: '#d33',
//             //         confirmButtonText: 'Yes, delete it!'
//             // }).then((result) => {
//             //     if (result.isConfirmed) {
//             //         fetch(`http://localhost:5000/service/${id}`, {
//             //             method: 'DELETE'
//             //         })
//             //         .then(res => res.json())
//             //         .then(data => {
//             //             if (data.deletedCount > 0) {
//             //                 Swal.fire(
//             //                     'Deleted!',
//             //                     'Your Service has been deleted.',
//             //                     'success'
//             //                 );
        
//             //                 // Update the state of services in the parent component
//             //                 const remaining = services.filter(service => service._id !== id);
//             //                 setServices(remaining);
//             //                 console.log(remaining);
//             //                 console.log(services);
//             //             }
//             //         });
//             //     }
//             // });
        
        
        
//         // Swal.fire({
//         //     title: 'Are you sure?',
//         //     text: "You won't be able to revert this!",
//         //     icon: 'warning',
//         //     showCancelButton: true,
//         //     confirmButtonColor: '#3085d6',
//         //     cancelButtonColor: '#d33',
//         //     confirmButtonText: 'Yes, delete it!'
//         //   }).then((result) => {
//         //     if (result.isConfirmed) {
             
//         //       fetch(`http://localhost:5000/service/${_id}`,{
//         //         method:'DELETE'
//         //       })
//         //       .then(res=>res.json())
//         //       .then(data =>{
    
    
//         //           console.log(data)
//         //           if(data.deletedCount>0){
//         //             Swal.fire(
//         //                 'Deleted!',
//         //                 'Your Service has been deleted.',
//         //                 'success'
//         //               ) 
//         //               const remaining = services.filter(services => services._id !== id )
//         //               setServices(remaining);
//         //           }
//         //       }
//         //         )
//         //     }
//         //   })
//     // }
//     // const handleUpdateBtn = () =>{
//     //     setIsOpen(true)
        
        
//     //     }
//         // const closeModal = ()=>{
//         //     setIsOpen(false)
//         // }
//     return (
//         <div>
            
//             <h2 className="text-xl font-semibold text-center my-4">Your Services</h2>
//             <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>

//             {
//                 services?.map((item) => (
//                     <div className='flex justify-center ' key={item._id}>
           
//                     <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 rounded-lg">
//             <ul className="flex flex-col divide-y divide-gray-700 w-[520px]">
//                 <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
//                     <div className="flex w-full space-x-2 sm:space-x-4">
//                         <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={item?.image}alt="Services" />
//                         <div className="flex flex-col justify-between w-full pb-4">
//                             <div className="flex justify-between w-full pb-2 space-x-2">
//                                 <div className="space-y-1">
//                                     <h3 className="text-lg font-semibold leadi sm:pr-8">{item?.serviceName}</h3>
//                                     <p className="text-sm dark:text-gray-400">{item?.area}</p>
//                                 </div>
//                                 <div className="text-right">
//                                     <p className="text-lg font-semibold">{item?.price}€</p>
//                                     {/* <p className="text-sm line-through dark:text-gray-600">75.50€</p> */}
//                                 </div>
//                             </div>
//                             <div className="flex text-sm divide-x">
//                                 <button onClick={()=>handleDelete(item?._id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
//                                         <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
//                                         <rect width="32" height="200" x="168" y="216"></rect>
//                                         <rect width="32" height="200" x="240" y="216"></rect>
//                                         <rect width="32" height="200" x="312" y="216"></rect>
//                                         <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
//                                     </svg>
//                                     <span >Remove</span>
//                                 </button>
//                                 {/* <button type="button" className="flex items-center px-2 py-1 space-x-1">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
//                                         <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
//                                     </svg>
//                                     <span>Add to favorites</span>
//                                 </button> */}
//                             </div>
//                         </div>
//                     </div>
//                 </li>
//                 </ul>
//             <div className="flex justify-end space-x-4">
//                 {/* <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
//                     <span className="sr-only sm:not-sr-only">to shop</span>
//                 </button> */}
//                 <button onClick={() => handleUpdateBtn()} type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
//                     <span className="sr-only sm:not-sr-only">Update</span>
//                 </button>
                
//                         {/* <UpdateService open ={isOpen} close={closeModal} service={service}></UpdateService> */}
                
//             </div>
//         </div>
//                 </div>
//                 ))
//             }
//             </div>
//         </div>
//     );
// };

// export default ManageService;


// import { useState } from "react";
// import { motion } from "framer-motion";

// const itemVariants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 300, damping: 24 }
//   },
//   closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
// };

// export default function Router() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.nav
//       initial={false}
//       animate={isOpen ? "open" : "closed"}
//       className="menu"
//     >
//       <motion.button
//         whileTap={{ scale: 0.97 }}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//        Dashboard
//         <motion.div
//           variants={{
//             open: { rotate: 180 },
//             closed: { rotate: 0 }
//           }}
//           transition={{ duration: 0.2 }}
//           style={{ originY: 0.55 }}
//         >
        
//         </motion.div>
//       </motion.button>
//       <motion.ul
//         variants={{
//           open: {
//             clipPath: "inset(0% 0% 0% 0% round 10px)",
//             transition: {
//               type: "spring",
//               bounce: 0,
//               duration: 0.7,
//               delayChildren: 0.3,
//               staggerChildren: 0.05
//             }
//           },
//           closed: {
//             clipPath: "inset(10% 50% 90% 50% round 10px)",
//             transition: {
//               type: "spring",
//               bounce: 0,
//               duration: 0.3
//             }
//           }
//         }}
//         style={{ pointerEvents: isOpen ? "auto" : "none" }}
//       >
//         <motion.li variants={itemVariants}>Item 1</motion.li>
//         <motion.li variants={itemVariants}>Item 2</motion.li>
//         <motion.li variants={itemVariants}>Item 3</motion.li>
//         <motion.li variants={itemVariants}>Item 4</motion.li>
//         <motion.li variants={itemVariants}>Item 5</motion.li>
//       </motion.ul>
//     </motion.nav>
//   );
// }
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Router = () => {

  

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div className='App'>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Life is simple{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  )
}
export default Router;