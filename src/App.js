// import library components
import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import file components

import Homepage from "./components/pages/Homepage";
import ProductList from "./components/pages/ProductListpage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route path="/" exact strict component={Homepage} />
            <Route path="/products" exact strict component={ProductList} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
