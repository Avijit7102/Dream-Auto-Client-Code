import React from 'react';
import repair from '../../../images/repair.jpg';
const Navbar = () => {
    return (
        <nav style={{backgroundColor: 'black'}}className="navbar navbar-expand-lg navbar-light">

            <div className="ml-5">
                <div class="float-left">
                    <img className="img-fluid" style={{width:'100px', height:'50px'}} src={repair} alt=""/>
                </div>
                <div class="float-right">
                    <h4 class="m-2 text-white">Dream auto</h4>
                </div>
            </div>

            <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5 text-white" href="/home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="/dashboard">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="/login">Log in</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;