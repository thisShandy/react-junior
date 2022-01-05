import React from "react";
import classes from "./Navigation.module.css";
import Category from "./Category/Category";

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: "3325",
          name: "woomen",
          active: true,
        },
        {
          id: "3365",
          name: "men",
          active: false,
        },
        {
          id: "3125",
          name: "kids",
          active: false,
        },
      ]
    }
  }

  changeCategory = (id) => {
    this.setState({
      categories: this.state.categories.map(el => {
        if ( el.id === id ) {
          return {
            id: el.id,
            name: el.name,
            active: true,
          }
        } else {
          return {
            id: el.id,
            name: el.name,
            active: false,
          }
        }
      })
    })
  }

  render () {
    return (
      <>
        <div className={classes.navigation}>
          {
            this.state.categories.map(el => {
              return <Category key={el.id} element={el} changeCategory={this.changeCategory} />
            })
          }
        </div>
      </>
    );
  };
};

export default Navigation;