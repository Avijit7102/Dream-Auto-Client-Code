import React from 'react';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import servicePic from '../../../images/ourServices.png';
import { useState } from 'react';
import { useEffect } from 'react';
const Service = () => {

    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('https://floating-wave-39867.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServiceData(data));
    },[])
    
    return (
        <section className="text-center mt-5">
            <img className="img-fluid border border-secondary bg-light rounded-circle" src={servicePic} alt=""/>
            <p style={{color: '#7D001C'}} className="text-uppercase pt-1 mt-3 font-weight-bold">We Provide our best services with your Satisfaction</p>
            

            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.length === 0 && <div class="spinner-border text-center" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                }
                {
                    serviceData.map(service => <ServiceDetails service={service} key={service.name}></ServiceDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Service;