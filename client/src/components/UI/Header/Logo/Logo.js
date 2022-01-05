import React from "react";
import classes from"./Logo.module.css";
import LogoImage from "./img/logo.svg"

class Logo extends React.Component {
  render () {
    return (
      <>
        <img src={LogoImage} className={classes.logo} alt="logo" />
      </>
    );
  };
};

export default Logo;