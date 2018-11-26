// import library components
import React, {Component, Fragment} from "react";
import {Redirect} from 'react-router-dom';

// import file components
import './Search.css';
import Form from './Form';


class SearchProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      queryData: []
    };
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(e){
    console.log("search for", e.target.value);
    this.setState({query: e.target.value});
  }
  render() {
    return (
      <Fragment>
        <Form change={this.changeHandler}/>
      </Fragment>
    );
  }
}

export default SearchProductList;
