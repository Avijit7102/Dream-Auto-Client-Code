import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer class="mainfooter" role="contentinfo">
            <div class="footer-middle">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">

                            <div class="footer-pad">
                                <ul class="list-unstyled">
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="">Log in</a></li>

                                    <li><a href="#">About</a></li>
                                    <li><a href="/dashboard">Dashboard</a></li>
                                    <li><a href="/login">Contact</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">

                            <div class="footer-pad">
                                <ul class="list-unstyled">
                                    <li><a href="#">Website Tutorial</a></li>
                                    <li><a href="#">Accessibility</a></li>
                                    <li><a href="#">Disclaimer</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Webmaster</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">

                            <div class="footer-pad">
                                <ul class="list-unstyled">
                                    <li><a href="#">Parks and Recreation</a></li>
                                    <li><a href="#">Public Works</a></li>
                                    <li><a href="#">Police Department</a></li>
                                    <li><a href="#">Fire</a></li>
                                    <li><a href="#">Mayor and City Council</a></li>
                                    <li>
                                        <a href="#"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <h4>Follow Us</h4>
                            <ul class="social-network social-circle">
                                <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 copy">
                            <p class="text-center">&copy; Copyright {new Date().getFullYear()} - Dream Auto.  All rights reserved.</p>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    );
};

export default Footer;