import React, { Component } from "react";
import classes from "./Currencies.module.css";
import arrowBottom from "./img/arrow-bottom.svg";
import arrowTop from "./img/arrow-top.svg";
import Item from "./Item/Item";

import { compose } from "redux";
import { connect } from "react-redux";
import { setCurrency } from "../../../../../redux/actions";

import {gql} from "@apollo/client";
import {graphql} from "@apollo/react-hoc";

const getCurrencies = gql`
   {
      currencies {
        label
        symbol
      }
   }
`;

class Currencies extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      loading: false,
      current: "0",
      currencies: [],
    }
  };

  componentDidUpdate() {
    if ( this.props.data.loading !== true && this.state.loading !== true ){
      this.setState({
        ...this.state,
        loading: true,
        currencies: this.props.data.currencies.map(( el, index ) => {
          return {
            id: index.toString(),
            symbol: el.symbol,
            label: el.label,
          }
        })
      }, () => {
        this.props.setCurrency({
          symbol: this.state.currencies[0].symbol,
          label: this.state.currencies[0].label,
        })
      })
    }
  }

  changeActive() {
    this.setState({
      ... this.state,
      active: !this.state.active
    });
  };

  changeCurrent = (id, symbol) => {
    this.setState({
      ...this.state,
      active: false,
      current: id,
    }, () => {
      this.props.setCurrency(symbol)
    });
  };

  render () {
    if (this.props.data.loading) {
      return <div>Loading</div>
    } else {
      return (
        <div className={classes.currency}>
          <button onClick={() => {
            this.changeActive()
          }} className={classes.current}>
            {
              this.state.currencies.find(el => el.id === this.state.current) ? this.state.currencies.find(el => el.id === this.state.current).symbol : ""
            }
            <img src={this.state.active ? arrowTop : arrowBottom} className={classes.currentImage} alt="arrow"/>
          </button>
          <ul style={{display: this.state.active ? "flex" : "none"}} className={classes.currencyList}>
            {
              this.state.currencies ?
              this.state.currencies.map(el => {
                return (
                  <Item key={el.id} element={el} changeCurrent={this.changeCurrent} />
                );
              }) : ""
            }
          </ul>
        </div>
      );
    };
  };
};

const mapDispatchToProps = {
  setCurrency,
}

export default compose(connect(null, mapDispatchToProps), graphql(getCurrencies))(Currencies);