import React from 'react';
import service from '../../../images/service.jpg';
import mechanic from '../../../images/mechanic.jpg';
import warranty from '../../../images/warranty.jpg';
import delivery from '../../../images/free-delivery.jfif';
const Benefit = () => {
    return (
        <div className="text-center mt-5">
            <h1 style={{color:'#003399'}}>Benefit From Work With Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, exercitationem?</p>
            <img style={{ width: '100px' }} className="img-fluid" src={service} alt="" />
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            <div className="col-md-4 text-center mb-5 p-1 bg-light">
                <img style={{ height: '150px', width: '350px' }} src={mechanic} alt="" />
                <h4 style={{marginTop:'10px', color:'#003399'}}>Fully Well trained Mechanic</h4><br/>
                <p style={{color: '#7D001C'}}>We have world class well trained mechanic.</p>
            </div>
            <div className="col-md-4 text-center mb-5 p-1 bg-light">
                <img style={{ height: '150px', width: '350px' }} src={delivery} alt="" />
                <h4 style={{marginTop:'10px', color:'#003399'}}>Free Drop Off</h4><br/>
                <p style={{color: '#7D001C'}}>We care about you, That is why we offer free drop off service.</p>
            </div>
            <div className="col-md-4 text-center mb-5 p-1 bg-light">
                <img style={{ height: '150px', width: '350px' }} src={warranty} alt="" />
                <h4 style={{marginTop:'10px', color:'#003399'}}>One years Warranty</h4><br/>
                <p style={{color: '#7D001C'}}>We provide One years warranty with maximum of our product</p>
            </div>
        </div>

            </div >
        </div >
    );
};

export default Benefit;
