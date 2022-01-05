import React, { Component } from "react";
import classes from "./Currencies.module.css";
import arrowBottom from "./img/arrow-bottom.svg";
import arrowTop from "./img/arrow-top.svg";
import Item from "./Item/Item";

class Currencies extends Component {

  constructor(props) {
    super(props);

    this.currencies = [
      {
        id: "112233",
        currency: "$",
        name: "USD",
      },
      {
        id: "345823",
        currency: "€",
        name: "EUR",
      },
      {
        id: "994513",
        currency: "¥",
        name: "JPY"
      },
    ];
    this.state = {
      active: false,
      current: 0,
    }
  };

  changeActive() {
    this.setState({
      ... this.state,
      active: !this.state.active
    });
  };

  changeCurrent = (index) => {
    this.setState({
      active: false,
      current: index,
    });
  };

  render () {
    return (
      <div className={classes.currency}>
        <button onClick={this.changeActive.bind(this)} className={classes.current}>
          {this.currencies[this.state.current].currency}
          <img src={this.state.active ? arrowTop : arrowBottom} className={classes.currentImage} alt="arrow" />
        </button>
        <ul style={{display: this.state.active ? "flex" : "none"}} className={classes.currencyList}>
          {
            this.currencies.map(( el, index ) => {
              return (
                <Item key={el.id} element={el} index={index} changeCurrent={this.changeCurrent} />
              );
            })
          }
        </ul>
      </div>
    );
  };
};

export default Currencies;