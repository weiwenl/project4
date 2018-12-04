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

  componentWillMount(){
  let query = '';
  if (localStorage && localStorage.getItem('query')) {
     query = JSON.parse(localStorage.getItem('query'));
  }
   this.setState({searchQuery: query})
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

    return (
      <Fragment>
        <div className="ProductList-title">
          <a href="/">
            <h1 ui header>
              <span style={{color:"red"}}>Mark</span>
              <span style={{color:"yellow"}}>et</span>
              <span style={{color:"cornFlowerBlue"}}>place</span>
            </h1>
          </a>
        </div>

        <div className="ProductList-header">
          <SearchProductList change={this.changeHandler} search={this.formSubmitHandler} i={this.state.searchQuery}/>
        </div>
        <div className="ProductList-body">
            <ProductListCell results={this.state.results}/>
        </div>
      </Fragment>
    );
  }
}

export default ProductListpage;
