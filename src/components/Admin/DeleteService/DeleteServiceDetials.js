import React from 'react';

const DeleteServiceDetials = ({pd}) => {

    const deleteProduct = (id) => {
        console.log('this id: ', id);
        fetch(`https://floating-wave-39867.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully')
                // if(result){
                //     pd.target.style.display = "none";
                // }
            })
    }
    return (
        <div className="col-md-4 text-center mb-5 p-1 bg-light">
            <img style={{height: '150px', width:'350px'}} src={pd.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{pd.name}</h5>
            <p className="text-secondary">{pd.description}</p>
            <p>Price: ${pd.price}</p>
            <button onClick={()=>deleteProduct(pd._id)} class="btn-brand text-white"><i class="fas fa-trash-alt mr-2"></i>Delete</button>
        </div>
    );
};

export default DeleteServiceDetials;