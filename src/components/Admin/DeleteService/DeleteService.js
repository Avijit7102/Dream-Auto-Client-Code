import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import DeleteServiceDetials from './DeleteServiceDetials';

const DeleteService = () => {

    const [allService, setAllService] = useState([]);
    useEffect(() => {
        fetch('https://floating-wave-39867.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setAllService(data));
    },[])
    return (
        <div>
            <Sidebar></Sidebar>
            <div style={{marginLeft:'250px'}} className="text-center">
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">

                {
                    allService.map(pd => <DeleteServiceDetials pd = {pd}></DeleteServiceDetials>)
                }
                </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteService;