import React from "react";
import PropTypes from "prop-types";

function Keg(props){

  const {onSubtractPint, keg} = props
  return (
    <React.Fragment>
      <h3>Name: {props.name}</h3>
      <h3>Brand: {props.brand}</h3>
      <h3>Price: ${props.price}</h3>
      <h3>Alcohol Content: <em>{props.alcoholContent}</em></h3>
      <h3>Pint Stock: {props.pintStock}</h3>
      {/* <button onClick={this.handleClick}>Sell 1+ Pint</button> */}
      <button onClick={() => onSubtractPint(keg.id)}>Sell 1+ Pint</button>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pintStock: PropTypes.number,
  onSubtractPint: PropTypes.func,
  keg: PropTypes.object
};

export default Keg;