import React from "react";
import classes from "./Navigation.module.css";
import Category from "./Category/Category";
import menu from "./img/menu2.svg";

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
      ],
      show: false,
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

  setShow = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

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
        <but className={classes.menu}>
          <button onClick={() => {this.setShow()}} className={classes.burger}>
            <img src={menu} className={classes.burgerImg} />
          </button>
          <div style={{display: this.state.show ? "flex" : "none"}} className={classes.menuItems}>
            {
              this.state.categories.map(el => {
                return (
                  <div className={classes.menuItem}>
                    <Category key={el.id} element={el} changeCategory={this.changeCategory} />
                  </div>
                );
              })
            }
          </div>
        </but>
      </>
    );
  };
};

export default Navigation;