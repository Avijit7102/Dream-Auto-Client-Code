import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import OrderStatusDetails from './OrderStatusDetails';

const OrderStatus = () => {

    const [allOrder, setAllOrder] = useState([])
    useEffect(() => {
        fetch('https://floating-wave-39867.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllOrder(data)
            });
    }, [])
    return (
        <div>
            <Sidebar></Sidebar>
            <div style={{ marginLeft: '250px', textAlign: 'center' }}>

                <div class="row bg-light mt-5 p-3 border-bottom">
                    <div class="col">Product Name</div>
                    <div class="col">Customer Name</div>
                    <div class="col">Customer EMail</div>
                    <div class="col">Price</div>
                    <div class="col">Status</div>
                    <div class="col">Check</div>
                </div>

                <div>
                    {
                        allOrder.map(order => <OrderStatusDetails order={order}></OrderStatusDetails>)
                    }

                </div>

                {/* <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Service Name</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Customer Email</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody style={{marginLeft: '250px',textAlign:'center'}}>
                            {
                                allOrder.map(order => <OrderStatusDetails order = {order}></OrderStatusDetails>)
                            }
                    </tbody>
                </table> */}

            </div>
        </div>
    );
};

export default OrderStatus;