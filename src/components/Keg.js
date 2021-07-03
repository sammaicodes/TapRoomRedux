import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
      <h3>Name: {props.name}</h3>
      <h3>Brand: {props.brand}</h3>
      <h3>Price: ${props.price}</h3>
      <h3>Alcohol Content: <em>{props.alcoholContent}</em></h3>
      <h3>Pint Stock: {props.pintStock}</h3>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pintStock: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;