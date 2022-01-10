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
          this.props.changeCurrent(this.props.element.id, {
            symbol: this.props.element.symbol,
            label: this.props.element.label
          });
        }} className={classes.currencyName}>
          {
            this.props.element.symbol + " " + this.props.element.label
          }
        </button>
      </li>
    );
  };
};

export default Item;