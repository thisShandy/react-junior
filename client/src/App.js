import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import "./reset.min.css";

import CategoryScreen from "./components/CategoriesScreen/CategoriesScreen"

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CategoryScreen/>}/>
        </Routes>
      </BrowserRouter>
    );
  };
};

export default App;