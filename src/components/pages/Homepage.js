// import library components
import React, {Component, Fragment} from "react";

// import file components
import "./Homepage.css"
import ProductCell from "../features/ProductCell"


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topResult: []
    };
  }

  componentDidMount() {
    const URL = "https://beta.5colorcombo.com/api/search?order-by=popularity&ascending=false";
    fetch(URL).then( (response) => {
      response.json().then( (data) => {
        this.setState({
            topResult: data.games
        })
      })
    })
  }

  render() {

    return (
      <Fragment>
          <div className="Homepage-header">
            <div className="head-wrapper">
              <div className="left">
                <h1 ui header>
                  <span style={{color:"red"}}>Mark</span>
                  <span style={{color:"yellow"}}>et</span>
                  <span style={{color:"cornFlowerBlue"}}>place</span>
                </h1>
              </div>
              <div className="right">
                <h2 ui header>Get board games cheap, <br/>
                compare prices at different stores.</h2>
              </div>
            </div>

            <div class="ui action input">
                <input type="text" placeholder="e.g Pandemic"/>
            </div>

          </div>
          <div className="Homepage-body">
            <h1>Recommended Games</h1>
            <ProductCell topResult={this.state.topResult} />
          </div>
      </Fragment>
    );
  }
}

export default Homepage;
