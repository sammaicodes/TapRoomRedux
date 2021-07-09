import React from 'react';
import KegForm from './KegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {

    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleSubtractPint = (id) => {
    const selectedKeg = this.props.masterKegList[id];

    if(selectedKeg.pintStock > 0){
      selectedKeg.pintStock -= 1;
      this.setState({selectedKeg: selectedKeg})
      if (selectedKeg.pintStock === 0){
        selectedKeg.pintStock = "Out of Stock"
        alert("Out of Stock")
      }
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;      

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onSubtractPint = {this.handleSubtractPint}/>
      buttonText = "Return to Keg List";
    }
    else if (this.props.formVisibleOnPage) { 
      currentlyVisibleState = <KegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";         
    } else {                                       
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      
      buttonText = "Add Keg";                    
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

KegControl = connect(mapStateToProps)(KegControl);


export default KegControl;