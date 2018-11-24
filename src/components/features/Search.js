// import library components
import React, {Component, Fragment} from "react";
import {Input} from 'semantic-ui-react'

// import file components
import './Search.css';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>

        <div class="ui action input">
            <input type="text" id="" placeholder="e.g Pandemic"/>
            <button class="ui button primary" onclick="">Search</button>
        </div>

      </Fragment>
    );
  }
}

export default Search;
