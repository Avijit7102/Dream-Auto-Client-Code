import React from 'react';

const OrderStatusDetails = ({order}) => {

    console.log('order from orderStatus: ', order)
    let updateOrder = {
        description: order.description,
        imageURL: order.imageURL,
        name: order.name,
        price: order.price,
        userEmail: order.userEmail,
        userName: order.userName,
    }

    const handleProcessing = (id) => {

        //console.log('processing clicked', id);
         updateOrder = {
             description: order.description,
             imageURL: order.imageURL,
             name: order.name,
             price: order.price,
             userEmail: order.userEmail,
             userName: order.userName,
             status: "processing"
         }
         //console.log("update order: ", updateOrder)
        
        fetch('https://floating-wave-39867.herokuapp.com/updateOrder/' + id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log('handle process button data: ', data)
            })
    }
    const handleDone = (id) => {
        updateOrder = {
            description: order.description,
            imageURL: order.imageURL,
            name: order.name,
            price: order.price,
            userEmail: order.userEmail,
            userName: order.userName,
            status: "Done"
        }

        fetch('https://floating-wave-39867.herokuapp.com/updateOrder/' + id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log('handle process button data: ', data)
            })
    }
    return (

        <div class="row mt-2 p-2 border-bottom">
                    <div class = "col">{order.name}</div>
                    <div class = "col">{order.userName}</div>
                    <div class = "col">{order.userEmail}</div>
                    <div class = "col">${order.price}</div>
                    <div class = "col">{order.status}</div>
                    <div class = "col"><button onClick={()=>handleProcessing(order._id)} class="btn-brand">Processing</button><button onClick={()=>handleDone(order._id)} class="ml-2 btn-brand">Done</button></div>
        </div>
        // <tr>
        //     <th >
        //     <td>{order.name}</td>
        //     <td>{order.userName}</td>
        //     <td>{order.userEmail}</td>
        //     <td>{order.price}</td>
        //     <td>{order.status}</td>
        // </th>
        // </tr>
    );
};

export default OrderStatusDetails;