// import library components
import React, {Component, Fragment} from "react";
import {Redirect} from 'react-router-dom';

// import file components
import './Search.css';
import Form from './Form';


class Search extends Component {
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
    let redirect = null;
    // this.state.query.length > 3 ? <Redirect to='/products' /> : console.log("nothing");
    ((this.state.query.length < 3) ? (redirect=null) : (redirect = <Redirect to='/products' />))
    return (
      <Fragment>
        {redirect}
        <Form change={this.changeHandler}/>
      </Fragment>
    );
  }
}

export default Search;
