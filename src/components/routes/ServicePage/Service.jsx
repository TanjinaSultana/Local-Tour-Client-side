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
   //const url ={};
   const handleInputValue = (e) =>{
    setSearchValue(e.target.value);
   }

   const handleBtn = () =>{
   fetch(`http://localhost:5000/myservice?serviceName=${serviceName}`)
   .then(res => res.json())
   .then(data => {
    console.log(data);
    const remaining =data.filter(item =>
        item.serviceName.toLowerCase() === searchValue.toLowerCase()
        );
        console.log(remaining);
        setServiceName(remaining);
         setSearch(true);
         setSearchValue("");
   })
   }

    return (
        <div className='my-24'>
            <h1 className='text-3xl font-bold flex justify-center '>All Services Are Here</h1>
<div className=' flex justify-center my-10'>

     <input type="text" placeholder="Search here" value={searchValue} onChange={handleInputValue}  className="input bg-[#EAEBF0] text-black  border-[#DEDEDE] w-48 lg:w-72 mt-5 h-[60px] rounded-none border-right-0  p-5" />
    <button className="btn px-4 bg-[#5E6284] h-[60px] mt-[20px]  text-white rounded-none  text-sm lg:text-lg  font-normal normal-case" onClick={handleBtn}>Search</button>
</div>
                  
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