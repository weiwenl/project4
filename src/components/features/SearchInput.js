// import library components
import React, {Component, Fragment} from "react";
import {Redirect} from 'react-router-dom';

// import file components


class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };

    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(e){
    console.log("searching for", e.target.value);
    this.setState({query: e.target.value});
    localStorage.setItem('query',
    JSON.stringify(this.state.query));
  }
  render() {
    let redirect = null;
    // this.state.query.length > 3 ? <Redirect to='/products' /> : console.log("nothing"); (redirect = <Redirect to={{ pathname: "/products", search: "?query={this.state.query}"
    ((this.state.query.length < 3) ? (redirect=null) : (redirect = <Redirect to='/products' />))
    return (
      <Fragment>
        {redirect}
        <input type="text" placeholder="e.g Pandemic" onChange={this.changeHandler}/>
      </Fragment>
    );
  }
}

export default SearchInput;
