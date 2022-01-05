import React, { Component } from "react";
import classes from "./Actions.module.css";

import Currencies from "./Currencies/Currencies";
import Cart from "./Cart/Cart";

class Actions extends Component {
  render () {
    return (
      <>
        <div className={classes.action}>
          <Currencies />
          <Cart />
        </div>
      </>
    );
  };
};

export default Actions;