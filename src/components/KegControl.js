import React from 'react';
import KegForm from './KegForm';
import KegList from './KegList';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
                  formVisibleOnPage: false });
  }

  handleSubtractPint = (id) => {
    const selectedKeg = this.state.masterKegList.filter(e => e.keg.id === id)[0];
    if(selectedKeg.pintStock > 0){
      selectedKeg.pintStock -= 1;
      this.setState({selectedKeg: selectedKeg})
    }else{
      return "Out of Stock"
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;                          
    if (this.state.formVisibleOnPage) {             //if true
      currentlyVisibleState = <KegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";         
    } else {                                        //if false
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} keg = {this.state.selectedKeg} onSubtractPint = {this.handleSubtractPint} />;
      
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

export default KegControl;