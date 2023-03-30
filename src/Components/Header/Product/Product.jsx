import React from "react";
import "./product.css";
const Product = (props) => {
  const { img, name, price, ratings, seller,id } = props.product;
  const handleAddToCart = props.handleAddToCart;
  console.log(props)
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <h5 className="price">Price: ${price}</h5>
        <h6 className="h6">Manufacture: {seller}</h6>
        <h5 className="h6">Rating: {ratings} star</h5>
      </div>
      <button onClick={() => handleAddToCart(id)} className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
