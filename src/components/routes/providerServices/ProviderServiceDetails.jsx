import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProviderServiceDetails = () => {
    const [services,setServices] = useState([])
    const {_id} = useParams();
    const data = useLoaderData();
    useEffect(() =>{
        const remaining = data?.find(service => service._id == _id)
        setServices(remaining);
    },[_id,data]);
    return (
        <div>
            <ProviderServiceDetails services={services}></ProviderServiceDetails>
        </div>
    );
};

export default ProviderServiceDetails;