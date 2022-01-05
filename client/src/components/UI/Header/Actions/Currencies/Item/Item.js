import React, {Component} from "react";
import classes from "./Item.module.css";

class Item extends Component {

  constructor(props) {
    super(props);
    this.index = this.props.index
  }

  render() {
    return (
      <li className={classes.currencyItem}>
        <button onClick={() => {
          this.props.changeCurrent(this.index);
        }} className={classes.currencyName}>
          {
            this.props.element.currency + " " + this.props.element.name
          }
        </button>
      </li>
    );
  };
};

export default Item;