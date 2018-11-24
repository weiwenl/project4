// import library components
import React, {Component, Fragment} from "react";

// import file components
import Search from "../features/Search"
import "./Homepage.css"

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="head-wrapper">
          <div className="left">
            <h1 ui header>
              <span style={{color:"cornFlowerBlue"}}>Mark</span>
              <span style={{color:"orange"}}>et</span>
              <span style={{color:"crimson"}}>place</span>
            </h1>
          </div>
          <div className="right">
            <h2 ui header>Get board games cheap, <br/>
            compare prices at different stores.</h2>
          </div>
        </div>
        <Search />
      </Fragment>
    );
  }
}

export default Homepage;