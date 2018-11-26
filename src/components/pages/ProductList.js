// import library components
import React, {Component, Fragment} from "react";
// import file components
import './ProductList.css'
import '../features/Search.css';
import SearchProductList from '../features/SearchProductList'


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      queryData: [],
      isLoading: true
    };
  }
  render() {
    return (
      <Fragment>
        <div className="ProductList-title">
          <h1 ui header>
            <span style={{color:"cornFlowerBlue"}}>Mark</span>
            <span style={{color:"orange"}}>et</span>
            <span style={{color:"crimson"}}>place</span>
          </h1>
        </div>
        <div className="ProductList-header">
          <SearchProductList />
        </div>
        <div>
          <h1>Products</h1>
        </div>
      </Fragment>
    );
  }
}

export default ProductList;
