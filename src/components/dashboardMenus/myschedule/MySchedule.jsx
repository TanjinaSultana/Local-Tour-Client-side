/* eslint-disable react/no-unknown-property */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../firebase/AuthProvider";
import Booking from "./Booking";



const MySchedule = () => {
    const {user} = useContext(AuthContext);
    const [booking,setBooking] = useState([]);
    const url = `http://localhost:5000/userService?userEmail=${user?.email}`
    useEffect(()=>{
fetch(url)
.then(res=>res.json())
.then(data=>{
    setBooking(data);
})
    },[url])
    return (
        <div>
            <h1>{booking.length}</h1>
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
          
        </div>
    )
};

export default MySchedule;