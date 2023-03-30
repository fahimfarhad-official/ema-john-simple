import React from 'react';
import './product.css';
const Product = (props) => {
    const {img, name, price, ratings, seller}= props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${price}</h5>
            <h6>Manufacture: {seller}</h6>
            <h6>Rating: {ratings} star</h6>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;