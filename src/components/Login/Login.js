import React from 'react';
import { Form } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import firebase from "firebase/app";
import "firebase/auth";

import './Login.css';
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                //console.log(user)
                const {displayName, email} = user;
                const signedInUser = {name: displayName, email};
                setLoggedInUser(signedInUser);
                history.replace(from);
                
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="Login">
            <Navbar></Navbar>
            <Form>
                <h3 className="login-title mt-5">Log in</h3>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </Form.Group>

            </Form>
            <div className="d-flex justify-content-center">
                <button className="btn btn-dark btn-lg btn-block btn-brand w-25" onClick={handleGoogleSignIn}><i style={{ color: '#4285f4' }} class="fab fa-google mr-3"></i>Sign in With Google</button>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;