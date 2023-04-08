import React from "react";
import "./Cart.css";

const Cart = ({cart}) => {
    console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        console.log(product.price);
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const text = totalPrice*7/100;
  const grandTotal = totalPrice + text + totalShipping ;
  // console.log(total);
//   console.log(product);
  return (
    <div className="cart">
      <h4>Order Summery</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: {totalPrice.toFixed(2)}</p>
      <p>Total Shipping Charge: {totalShipping.toFixed(2)}</p>
      <p>Tax: {text.toFixed(2)}</p>
      <p>Grand Total: {grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
