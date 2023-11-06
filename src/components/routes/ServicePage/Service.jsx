import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from './Services';

const Service = () => {
    const[show,setShow] = useState(false);
    const[searchValue,setSearchValue] = useState('');
    const[search,setSearch] = useState(false);
    const[serviceName,setServiceName] = useState({});
    const data = useLoaderData();
    const service = data.slice(0,6);
    const services = show ? data : service
   
   const handleInputValue = (e) =>{
    setSearchValue(e.target.value);
   }
   const handleBtn = () =>{
    const remaining =data.filter(item =>
        item.serviceName.toLowerCase() === searchValue.toLowerCase()
        );
        console.log(remaining);
        setServiceName(remaining);
         setSearch(true);
         setSearchValue("");
   }

    return (
        <div className='my-24'>
     <input type="text" placeholder="Search here" value={searchValue} onChange={handleInputValue}  className="input text-black  border-[#DEDEDE] w-48 lg:w-72 mt-5 rounded-none" />
     {/* <input type="text"  placeholder="Search" value={searchValue} onChange={handleInputValue} className="input text-black  border-[#DEDEDE] w-48 lg:w-72 mt-5 rounded-none" /> */}

     <button className="btn bg-[#FF444A]  text-white rounded-none text-sm lg:text-lg  font-normal normal-case" onClick={handleBtn}>Search</button>
                  {/* <button className="btn bg-[#FF444A]  text-white rounded-none text-sm lg:text-lg  font-normal normal-case" onClick={handleBtn}>Search</button> */}
{
    search?(

            <div className='flex flex-col justify-center items-center gap-10'>
  
           {
                    serviceName?.map(service =>(
                        <Services key={service._id} service={service}></Services>
                    ))
                    
            }
            
{data.length >6 && !show && (

<button onClick={()=> setShow(true)}>Show All</button> 
)
}
            </div>
    ): <div className='flex flex-col justify-center items-center gap-10'>
  
    {
             services?.map(service =>(
                 <Services key={service._id} service={service}></Services>
             ))
             
     }
     
{data.length >6 && !show && (

<button onClick={()=> setShow(true)}>Show All</button> 
)
}
     </div>
}
        </div>
    );
};

export default Service;