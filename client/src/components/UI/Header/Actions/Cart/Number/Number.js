import React, { Component } from "react";
import classes from "./Number.module.css";

class Number extends Component {
  render() {
    return (
      <>
        <div className={classes.numberContainer}>
          <label className={classes.numberLabel}>2</label>
        </div>
      </>
    );
  };
};

export default Number;