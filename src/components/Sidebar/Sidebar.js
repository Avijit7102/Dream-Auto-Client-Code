import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Sidebar.css'
const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        fetch('https://floating-wave-39867.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data)});
    })

    return (
        <div>
            <nav className="sidebar">
                <ul>
                    <li>
                        <Link className="text-white" to="/home"><i class="fas fa-home mr-2"></i>Home</Link>
                    </li>
                    {admin && <div>
                    <li >
                        <Link className="text-white" to="/OrderStatus"><i class="fas fa-shopping-cart mr-2"></i>Order List</Link>
                    </li>
                    <li>
                        <Link className="text-white" to="/addService"><i class="fas fa-plus-square mr-2"></i>Add Service</Link>
                    </li>
                    <li>
                        <Link className="text-white" to="/makeAdmin"><i class="fas fa-user-plus mr-2"></i>Make Admin</Link>
                    </li>
                    <li>
                        <Link className="text-white" to="/deleteService"><i class="far fa-trash-alt mr-2"></i>Delete Service</Link>
                    </li>
                    <li>
                        <Link className="text-white" to="/deleteReviews"><i class="far fa-trash-alt mr-2"></i>Delete Reviews</Link>
                    </li>
                    </div>}
                    
                    <li>
                        <Link className="text-white" to="/yourOrder"><i class="fas fa-shopping-cart mr-2"></i>Your Order List</Link>
                    </li>
                    <li>
                        <Link className="text-white" to="/addReview"><i class="fas fa-pencil-alt mr-2"></i>Add Review</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;