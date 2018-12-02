// import library components
import React, {Component, Fragment} from "react";
import {Card} from 'semantic-ui-react'
// import file components
import './ProductListpage.css'
import '../features/Search.css';

import SearchProductList from '../features/SearchProductList'

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
            results: data.games
        })
      })
    })
  }

  render() {
    let searchResults = this.state.results.map((game) => {
      return(
            <Card
              key={game.id} // Unique key identifier for React
              image={game.image_url} // Url of the image for the current object inside api
              header={game.name}
              meta={game.year_published}
              description={game.description}
            />
          );
        });
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
        <div>
          <h1>Products</h1>
          <Card.Group>
                {searchResults}
          </Card.Group>
        </div>
      </Fragment>
    );
  }
}

export default ProductListpage;
