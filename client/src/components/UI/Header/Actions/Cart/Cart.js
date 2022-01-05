import React, { Component } from "react";
import classes from "./Cart.module.css";
import cart from "./img/cart.svg";
import Number from "./Number/Number";

class Cart extends Component {
  render () {
    return (
      <>
        <button className={classes.cart}>
          <Number />
          <img src={cart} className={classes.cartImg} alt="cart" />
        </button>
      </>
    );
  };
};

export default Cart;