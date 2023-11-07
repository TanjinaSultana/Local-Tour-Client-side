/* eslint-disable no-unreachable */
/* eslint-disable react/no-unknown-property */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../firebase/AuthProvider";
import Booking from "./Booking";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import AxiosUse from "../../../hook/AxiosUse";

import MyPending from "./MyPending";



const MySchedule = () => {
    const [booking,setBooking] = useState([]);
    const [bookingConfirm,setBookingConfirm] = useState([]);
    const data = useLoaderData();
    const {user} = useContext(AuthContext);
    const email = user?.email;
    //console.log(user?.email);
    const axiosSecure = AxiosUse()
    //const navigate = useNavigate();
    useEffect(()=>{
        const remaining = data?.filter((item) => 
        item.providerEmail === email )
        const confirmBoking = data?.filter((item) => 
         item.status === 'confirm' )
        setBooking(remaining)
        setBookingConfirm(confirmBoking);
    },[data,email])
    const url =`/userService?email=${user?.email}`
   
    useEffect(()=>{
        axiosSecure.get(url)
        .then(res =>{
            setBooking(res.data);
            setBookingConfirm(res.data);
        })
// fetch(url,{credentials:'include'})
// .then(res=> res.json())
// .then(data=>{
   
//     setBooking(data);
   
// })
    },[url,axiosSecure])
    console.log(booking);
    console.log(bookingConfirm);
    return (
        <div>
            <h1>My Bookings</h1>
            {
                booking.length<1?<h1>No Services Are Booked</h1>
                :(

            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 ">

	<div className="">
		<table className=" p-6 text-xs text-left w-[600px] ">
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
				<th className="dark:bg-gray-700 ">
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
                bookingConfirm.length<1?<h1>No Pending Work</h1>:(
                
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold text-black text-center">My Pending Work </h2>
	<div className="">
		<table className="min-w-full text-xs">
			<colgroup>
				<col></col>
				<col></col>
				<col></col>
				<col></col>
				<col></col>
				<col className="w-24"></col>
			</colgroup>
			<thead className="dark:bg-gray-700">
				<tr className="text-left">
					<th className="p-3">Invoice #</th>
					<th className="p-3">Client</th>
					<th className="p-3">Issued</th>
					<th className="p-3">Due</th>
					<th className="p-3 text-right">Amount</th>
					<th className="p-3">Status</th>
				</tr>
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