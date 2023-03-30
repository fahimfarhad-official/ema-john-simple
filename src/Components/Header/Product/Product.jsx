import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./product.css";
const Product = (props) => {
  const { img, name, price, ratings, seller, id } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <h5 className="price">Price: ${price}</h5>
        <h6 className="h6">Manufacture: {seller}</h6>
        <h5 className="h6">Rating: {ratings} star</h5>
      </div>
      <button onClick={() => handleAddToCart(props.product)} className="btn-cart">
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
