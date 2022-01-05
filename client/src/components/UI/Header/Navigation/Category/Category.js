import React, { Component } from "react";
import classes from "./Category.module.css";

class Category extends Component {
  render () {
    return (
      <>
        <button onClick={() => {
          this.props.changeCategory(this.props.element.id)
        }} style={ this.props.element.active ? {
          color: "#5ECE7B",
          borderBottom: "2px solid #5ECE7B",
          fontWeight: 500,
          marginTop: "1px",
        } : null } className={ classes.categoryButton }>{ this.props.element.name }</button>
      </>
    );
  };
};

export default Category;