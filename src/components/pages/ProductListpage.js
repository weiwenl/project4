// import library components
import React, {Component, Fragment} from "react";
// import file components
import './ProductListpage.css'
import '../features/Search.css';

import SearchProductList from '../features/SearchProductList'
import ProductListCell from '../features/ProductListCell'

class ProductListpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      results: [],
      isLoading: true
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  changeHandler(e) {
    console.log("searching productList", e.target.value);
    this.setState({searchQuery: e.target.value});
  }

  formSubmitHandler(e) {
    e.preventDefault();
    console.log("click");
    const reactThis = this;
    const URL = 'https://beta.5colorcombo.com/api/search?name=' + encodeURI(reactThis.state.searchQuery);
    console.log("QueryURL", URL);

    fetch(URL).then( (response) => {
      response.json().then( (data) => {
        this.setState({
            results: data.games,
            isLoading: false
        })
      })
    })
  }

  render() {
    let displayMsg = null;
    (this.state.isLoading) ? (displayMsg = "Waiting for Results.") : (displayMsg = "Your Search Results.")

    return (
      <Fragment>
        <div className="ProductList-title">
          <h1 ui header>
            <span style={{color:"red"}}>Mark</span>
            <span style={{color:"yellow"}}>et</span>
            <span style={{color:"cornFlowerBlue"}}>place</span>
          </h1>
        </div>
        <div className="ProductList-header">
          <SearchProductList change={this.changeHandler} search={this.formSubmitHandler}/>
        </div>
        <div className="ProductList-body">
          <h1>{displayMsg}</h1>
            <ProductListCell results={this.state.results}/>
        </div>
      </Fragment>
    );
  }
}

export default ProductListpage;
