import React from 'react';
const ReviewsDetails = ({ review }) => {
    return (
        <div className="col-md-4 text-center mb-5 p-1 bg-light">
            <div className="card-body">
                <img style = {{width: '50%', height: '200px'}}className="img-fluid rounded-circle" src={review.imageURL} alt=""/>
                <p style={{color: '#7D001C'}} className="card-text text-center m-2 p-2">{review.description} <br/> --- <span style={{color:'#003399', fontWeight:'bold'}}>{review.name}</span> </p>
            </div>
       </div>

    );
};

export default ReviewsDetails;