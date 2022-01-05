import React from "react";
import classes from"./Header.module.css";

import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Actions from "./Actions/Actions";

class Header extends React.Component {
  render () {
    return (
      <>
        <header className={classes.header}>
          <div className={classes.container}>
            <Navigation active={true} />
            <Logo />
            <Actions />
          </div>
        </header>
      </>
    );
  };
};

export default Header;