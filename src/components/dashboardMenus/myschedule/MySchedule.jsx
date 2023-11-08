/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unreachable */
/* eslint-disable react/no-unknown-property */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../firebase/AuthProvider";
import Booking from "./Booking";
import { useLoaderData, useLocation} from "react-router-dom";
import AxiosUse from "../../../hook/AxiosUse";

import MyPending from "./MyPending";
import axios from "axios";


const MySchedule = ({service}) => {
    console.log(service);
    
    const [booking,setBooking] = useState([]);
    const [bookingConfirm,setBookingConfirm] = useState([]);
    const data = useLoaderData();
    const {user} = useContext(AuthContext);
    const email = user?.email;
    const axiosSecure = AxiosUse()
    const location = useLocation();
    useEffect(() => {
        document.title = `Local Tour & Guide | ${location.pathname}`;
      }, [location.pathname]);
       useEffect(()=>{
                const remaining = data?.filter((item) => 
                item.email == email )
                const confirmBoking = data?.filter((item) => 
                 item.providerEmail === email )
                setBooking(remaining)
                setBookingConfirm(confirmBoking);
            },[data,email])
      const url =`https://service-server-side-three.vercel.app/userService?email=${user?.email}`
      
      useEffect(()=>{
          axios.get(url,{withCredentials:true})
          .then(res =>{
              setBooking(res.data);
              setBookingConfirm(res.data);
           
            })
    },[url,axiosSecure])
    console.log(booking);
    console.log(bookingConfirm);
    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-3xl text-center font-bold">My Bookings</h1>
            {
                booking.length<1?<h1 className="text-2xl text-center font-bold">No Services Are Booked</h1>
                :(

            <div className="container p-2 mx-auto sm:p-4  ">

	<div className="">
		<table className=" p-6 text-xs text-left w-[600px]    ">
			<colgroup>
				<col className=""></col>
				<col ></col>
				<col></col>
				<col></col>
				<col></col>
				<col></col>
				<col className=""></col>
			</colgroup>
			<thead  className="">
				<th className=" bg-[#EAEBF0] text-black ">
					<th className="p-3  w-[100px]">Service Image</th>
					<th className="p-3  w-[100px]">Service Name</th>
					<th className="p-3  w-[100px]">Price</th>
					<th className="p-3  w-[100px]">Service Tracking Date</th>
					<th className="p-3  w-[100px]">Email</th>
					<th className="p-3  ">Area</th>
					
				</th>
                
			</thead>
			
			
        {
                booking?.map(service =>(

                   <Booking key={service._id} services={service}></Booking>
                ))
                
        }
          
		</table>
	</div>
</div>



                )
            }
           
            {
                bookingConfirm.length<1?<h1 className="text-2xl font-bold text-center">No Pending Work</h1>:(
                
                    <div className="container p-2 mx-auto sm:p-4 ">

                    <div className="">
                        <table className=" p-6 text-xs text-left w-[600px]  ">
                            <colgroup>
                                <col className=""></col>
                                <col ></col>
                                <col></col>
                                <col></col>
                                <col></col>
                                <col></col>
                                <col className=""></col>
                            </colgroup>
                            <thead  className="">
                                <th className=" bg-[#EAEBF0] text-black">
                                    <th className="p-3  w-[100px]">Service Image</th>
                                    <th className="p-3  w-[100px]">Service Name</th>
                                    <th className="p-3  w-[100px]">Price</th>
                                    <th className="p-3  w-[100px]">Service Tracking Date</th>
                                    <th className="p-3  w-[100px]">Email</th>
                                    <th className="p-3  ">Status</th>
                                    
                                </th>
                                
                            </thead>
			<tbody className="text-black">
				
			{
                 bookingConfirm?.map(service =>(

                    <MyPending 
                    key={service._id} 
                    services={service}></MyPending>
                 ))
            }
				</tbody>
                 </table>
	         </div>
           </div>
                )
            }
          
        </div>
    )
};

export default MySchedule;