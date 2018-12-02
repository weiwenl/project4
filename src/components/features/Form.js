// import react component
import React, {Fragment} from "react";

// import file component
import PropTypes from "prop-types";


const Form = props => {
  return (
    <Fragment>
        <div class="ui action input">
            <input type="text" placeholder="e.g Pandemic" onChange={props.change}/>
            <button class="ui button primary" onClick={props.search}>Search</button>
        </div>
    </Fragment>
  );
};

Form.propTypes = {
  change: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
};

export default Form;
