import React from 'react';
import Benefit from '../Benefit/Benefit';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Service from '../Services/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Benefit></Benefit>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;