import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleServicesDetails from "./SingleServicesDetails";


const SingleService = () => {
    const [services,setServices] = useState([])
    const {_id} = useParams();
    const data = useLoaderData();
    useEffect(() =>{
        const remaining = data?.find(service => service._id == _id)
        setServices(remaining);
    },[_id,data]);
    return (
        <div>
            <SingleServicesDetails services ={services}></SingleServicesDetails>
        </div>
    );
};

export default SingleService;