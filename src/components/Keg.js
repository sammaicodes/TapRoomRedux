import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h3>Name: {props.name}</h3>
      <h3>Brand: {props.brand}</h3>
      <h3>Price: ${props.price}</h3>
      <h3>Alcohol Content: <em>{props.alcoholContent}</em></h3>
      <h3>Pint Stock: {props.pintStock}</h3>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pintStock: PropTypes.number
};

export default Keg;