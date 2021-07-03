import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onSubtractPint } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name}</h3>
      <h3>{keg.brand}</h3>
      <h3>{keg.price}</h3>
      <h3>{keg.alcoholContent}</h3>
      <h3>{keg.pintStock}</h3>
  
      <button onClick={() => onSubtractPint(keg.id)}>Sell 1+ Pint</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  
};

export default KegDetail;