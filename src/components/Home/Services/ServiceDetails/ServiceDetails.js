import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({ service }) => {
    const id = service._id;

    return (
        // <div style={{marginLeft:'10px'}} class="card col-md-4 mb-3">
        //     <div class="card-body">
        //     <img style={{height: '150px', width:'350px'}} src={service.img} alt="" />
        //     <h5 className="mt-3 mb-3">{service.title}</h5>
        //     <p className="text-secondary">{service.description}</p>
        //     <p>Price: ${service.price}</p>
        //     <button class="btn-brand">Order</button>
        //     </div>
        // </div>
        <div className="col-md-4 text-center mb-5 p-1 bg-light image">
            <img style={{height: '150px', width:'350px'}} src={service.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">{service.description}</p>
            <p>Price: ${service.price}</p>
            <button class="btn-brand text-white"><Link to={`/checkout/${id}`}><i class="fas fa-shopping-cart mr-2"></i>Order</Link></button>
        </div>
    );
};

export default ServiceDetails;