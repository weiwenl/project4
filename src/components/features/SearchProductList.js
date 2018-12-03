// import library components
import React, {Fragment} from "react";
import PropTypes from "prop-types";

// import file components
import './Search.css';



const SearchProductList = props => {
  return (
    <Fragment>
        <div class="ui action input">
            <input type="text" placeholder="e.g Pandemic" onChange={props.change} value={props.i} autoFocus/>
            <button class="ui button primary" onClick={props.search}>Search</button>
        </div>
    </Fragment>
  );
}

SearchProductList.propTypes = {
  change: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
};

export default SearchProductList;
