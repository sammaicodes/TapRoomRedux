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
      // formVisibleOnPage: false,
      // masterKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        // formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);

      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage,
      // }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);

    // const newMasterKegList = this.state.masterKegList.concat(newKeg);
    // this.setState({
    //   masterKegList: newMasterKegList,
    //               formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {

    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
    // const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    // this.setState({selectedKeg: selectedKeg});
  }

  handleSubtractPint = (id) => {
    // const selectedKeg = this.state.masterKegList.filter(k => k.id === id)[0];
    const selectedKeg = this.props.masterKegList[id];

    
    // if(selectedKeg.pintStock > 0){
    //   selectedKeg.pintStock -= 1;
    //   this.setState({selectedKeg: selectedKeg})
    // }else if (selectedKeg.pintStock === 0){
    //   selectedKeg.pintStock = "Out of Stock"
    //   alert("Out of Stock")
    // }
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
    // else if (this.state.formVisibleOnPage) {        //if true
    else if (this.props.formVisibleOnPage) { 
      currentlyVisibleState = <KegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";         
    } else {                                        //if false
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