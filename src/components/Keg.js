import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.brand}</h3>
      <h3>{props.price}</h3>
      <p><em>{props.alcoholContent}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired
};

export default Keg;