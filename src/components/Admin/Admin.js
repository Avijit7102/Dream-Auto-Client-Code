import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../App';
import Service from '../Home/Services/Service';
import Sidebar from '../Sidebar/Sidebar';
import MakeAdmin from './MakeAdmin/MakeAdmin';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const [isAdmin, setIsAdmin] = useState(false);
    // useEffect(()=>{
    //     fetch('https://floating-wave-39867.herokuapp.com/admins')
    //     .then(res => res.json())
    //     .then(data => setAdmin(data));
    // },[])
    useEffect(() => {
        fetch('https://floating-wave-39867.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data)});
    }, [])
    return (
        <div>
            {
                isAdmin ? <MakeAdmin></MakeAdmin>: <div><Sidebar></Sidebar>
                <div style={{marginLeft:'100px'}}>
                <Service></Service>
                </div>
                </div>

            }
            {/* // {
            //     isAdmin && <MakeAdmin></MakeAdmin>
            // } */}
        </div>
    );
};

export default Admin;