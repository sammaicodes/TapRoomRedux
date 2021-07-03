import React from 'react';
import KegForm from './KegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

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
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleSubtractPint = (id) => {
    const selectedKeg = this.state.masterKegList.filter(k => k.id === id)[0];
    
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
    else if (this.state.formVisibleOnPage) {        //if true
      currentlyVisibleState = <KegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";         
    } else {                                        //if false
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      
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