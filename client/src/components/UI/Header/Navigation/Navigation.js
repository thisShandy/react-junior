import React from "react";
import classes from "./Navigation.module.css";
import Category from "./Category/Category";
import menu from "./img/menu2.svg";
import { compose } from "redux";

import { connect } from "react-redux";
import { setCurrentCategory } from "../../../../redux/actions";

import {gql} from "@apollo/client";
import {graphql} from "@apollo/react-hoc";

const getCategories = gql`
   {
      categories {
        name
      }
   }
`;

class Navigation extends React.Component {

  state = {
    loading: false,
    active: false,
    categories: []
  }

  componentDidUpdate() {
    if ( this.props.data.loading !== true && this.state.loading !== true ){
      this.setState({
        ...this.state,
        loading: true,
        categories: this.props.data.categories.map(( el, index ) => {
          return {
            id: index.toString(),
            index,
            name: el.name,
            active: index === 0 ? true : false,
          }
        })
      }, () => {
        this.props.setCurrentCategory(this.state.categories.find(el => el.id === "0"))
      })
    }
  }

  changeCategory = (id) => {
    this.setState({
      ...this.state,
      categories: this.state.categories.map(el => {
        return {
          ...el,
          active: el.id === id ? true : false,
        }
      })
    }, () => {
      this.props.setCurrentCategory(this.state.categories.find(el => el.id === id))
    })
  }

  setActive = () => {
    this.setState({
      ...this.state,
      active: !this.state.active
    })
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>
    } else {

      return (
        <>
          <div className={classes.navigation}>
            {
              this.state.categories.map(el => {
                return <Category key={el.id} element={el} changeCategory={this.changeCategory} />
              })
            }
          </div>
          <div className={classes.menu}>
            <button onClick={() => {
              this.setActive()
            }} className={classes.burger}>
              <img src={menu} className={classes.burgerImg}/>
            </button>
            <div style={ this.state.active ? { display: "flex" } : { display: "none" } } className={classes.menuItems}>
              {
                this.state.categories.map(el => {
                  return (
                    <div className={classes.menuItem}>
                      <Category key={el.id} element={el} changeCategory={this.changeCategory}/>
                   </div>
                  )
                })
              }
            </div>
          </div>
        </>
      );
    };
  };
};

const mapDispatchToProps = {
  setCurrentCategory,
}

export default compose(connect(null, mapDispatchToProps), graphql(getCategories))(Navigation);