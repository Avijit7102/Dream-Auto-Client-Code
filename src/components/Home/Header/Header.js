import React from 'react';
import Navbar from '../Navbar/Navbar';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../../images/pic.jfif';
import image2 from '../../../images/image2.jpg';
import image3 from '../../../images/image3.jpg';
import image4 from '../../../images/image4.jpg';
import image5 from '../../../images/image5.jpg';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main style={{ height: '600px', backgroundColor: '#DDAF94'}} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1 header">
                    <h1 style={{ color: '#3A4256' }}>Your Satisfaction is <br /> Our expectation</h1>
                    <p style={{ color:'#880000'}}className="text-secondary">We can help to keep your on the road.</p>
                </div>
                <div className="col-md-6">
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        <img onMouseOver={e => e.currentTarget.src="https://image.freepik.com/free-photo/front-view-generic-brandless-moder-car_110488-502.jpg"} style={{height: '500px',objectFit: 'cover'}} src={image1} className="img-fluid rounded float-end" alt=""/>
                        <img onMouseOver={e => e.currentTarget.src="https://image.freepik.com/free-photo/car-tires-with-fire-smoke_110488-1755.jpg"}style={{height: '500px',objectFit: 'cover'}} src={image2} className="img-fluid rounded float-end" alt="" />
                        <img onMouseOver={e => e.currentTarget.src="https://image.freepik.com/free-photo/generic-brandless-modern-sport-car-with-fire-smoke_110488-1759.jpg"}style={{height: '500px',objectFit: 'cover'}} src={image3} className="img-fluid rounded float-end" alt="" />
                        <img onMouseOver={e => e.currentTarget.src="https://image.freepik.com/free-photo/red-generic-sport-car-black_110488-1849.jpg"}style={{height: '500px',objectFit: 'cover'}} src={image4} className="img-fluid rounded float-end" alt=""/>
                        <img onMouseOver={e => e.currentTarget.src="https://image.freepik.com/free-photo/car-travelling-by-sunny-road_1088-51.jpg"}style={{height: '500px',objectFit: 'cover'}} src={image5} className="img-fluid rounded float-end" alt=""/>

                    </AliceCarousel>
                    {/* <img src={pic} alt="" className="img-fluid rounded float-end" /> */}
                </div>
            </main>

            <div className="row mt-5 text-center">
                <div className="col-md-4">
                    <h3>24/7</h3>
                    <p style={{ color: '#1400c6', fontSize: 'bold' }} class="text-uppercase ">Dedicated Support Team</p>
                </div>
                <div className="col-md-4">
                    <h3>10000+</h3>
                    <p style={{ color: '#1400c6', fontSize: 'bold' }} class="text-uppercase">Client Satisfaction</p>
                </div>
                <div className="col-md-4">
                    <h3>30 Days</h3>
                    <p style={{ color: '#1400c6', fontSize: 'bold' }} class="text-uppercase">MONEY BACK GUARANTEE</p>
                </div>

            </div>
        </div>
    );
};

export default Header;