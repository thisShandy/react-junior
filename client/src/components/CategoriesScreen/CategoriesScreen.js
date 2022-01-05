import React from "react";
import Header from "../UI/Header/Header";
import "./CategoriesScreen.css";

class CategoriesScreen extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h1>Categories Screen</h1>
        </div>
      </React.Fragment>
    );
  };
};

export default CategoriesScreen;