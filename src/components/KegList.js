import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){

  const myStyledComponentStyles = {
    backgroundColor: '#ffa500',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  return (
    <div style={myStyledComponentStyles}>
    <React.Fragment>
      {Object.values(props.kegList).map((keg) =>
        <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pintStock={keg.pintStock}
          formattedWaitTime={keg.formattedWaitTime}
          id={keg.id}
          key={keg.id} />
      )}
    </React.Fragment>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;