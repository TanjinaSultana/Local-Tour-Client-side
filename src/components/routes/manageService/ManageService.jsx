/* eslint-disable no-undef */
import React from 'react';
import SingleManageServices from './SingleManageServices';
import { useLoaderData } from 'react-router-dom';

const ManageService = () => {
    const data = useLoaderData();
    return (
        <div>
            
            <h2 className="text-xl font-semibold text-center my-4">Your Services</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>

            {
                data?.map((item) => <SingleManageServices key={item._id} service={item}></SingleManageServices>)
            }
            </div>
        </div>
    );
};

export default ManageService;