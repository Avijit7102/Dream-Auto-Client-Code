import React from 'react';

const DeleteReviewsDetails = ({reviews}) => {
    const deleteReviews= (id) => {
        console.log('id is : ', id);
        fetch(`http://localhost:6600/deleteReviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully')
            })
    }
    return (
        <div className="col-md-4 text-center mb-5 p-1 bg-light">
            <div className="card-body">
                <img style = {{width: '50%', height: '200px'}}className="img-fluid rounded-circle" src={reviews.imageURL} alt=""/>
                <p style={{color: '#7D001C'}} className="card-text text-center m-2 p-2">{reviews.description} <br/> --- <span style={{color:'#003399', fontWeight:'bold'}}>{reviews.name}</span> </p>
                <button onClick={()=>deleteReviews(reviews._id)} class="btn-brand text-white"><i class="fas fa-trash-alt mr-2"></i>Delete</button>
            </div>
       </div>
    );
};

export default DeleteReviewsDetails;