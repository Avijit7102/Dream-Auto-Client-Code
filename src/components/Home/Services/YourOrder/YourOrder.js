import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { userContext } from '../../../../App';
import Sidebar from '../../../Sidebar/Sidebar';

const YourOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [yourOrder, setYourOrder] = useState([])

    useEffect(() => {
        fetch('https://floating-wave-39867.herokuapp.com/yourOrder?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setYourOrder(data)
            })
    }, [loggedInUser.email])

    return (
        <div>
            <Sidebar></Sidebar>
            <div style={{ marginLeft: '250px' }} className="text-center mt-5 border-bottom">
                <div>
                    <h5 style={{color: '#FF4500'}}>Name: {loggedInUser.name}</h5>
                    <br />
                    <h6 style={{color: '#FF4500'}}>Email: {loggedInUser.email}</h6>
                    <br />
                    <h6 style={{color: '#FF4500'}} className="orderLength">Total number of your Ordered: {yourOrder.length}</h6>
                </div>
            </div>
            <div style={{marginLeft:'100px'}}className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">

                    {
                        yourOrder.map(pd =>
                            <div className="col-md-4 text-center mb-5 p-1 bg-light">
                                <img style={{ height: '150px', width: '350px' }} src={pd.imageURL} alt="" />
                                <h5 className="mt-3 mb-3">{pd.name}</h5>
                                <p className="text-secondary">{pd.description}</p>
                                <p>Price: ${pd.price}</p>
                                <button class="btn-brand text-white">Status: {pd.status}</button>
                            </div>

                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default YourOrder;