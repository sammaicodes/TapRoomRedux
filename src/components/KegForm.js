import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function KegForm(props){

  const border = {
    // borderStyle: 'double',
    paddingTop: '50px',
    paddingLeft: '50px',
    paddingRight: '50px',
  }

  function handleKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value, 
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pintStock: 124, 
      id: v4()});
  }

  return (
    <div style={border}>
    <React.Fragment>
    <hr/>
    <form onSubmit={handleKegFormSubmission}>
    <br/>
      <input
        type='text'
        name='name'
        placeholder='Name' 
        required />
      <br/>
      <input
        type='text'
        name='brand'
        placeholder='Brand' 
        required />
        <br/>
      <input
        type='text'
        name='price'
        placeholder='Price' 
        required />
        <br/>
      <input
        type='text'
        name='alcoholContent'
        placeholder='Alcohol Content' 
        required />
        <br/>
      <input
        type='hidden'
        name='pintStock'/>
        <br/>
      <button type='submit'>Add Keg!</button>
      <br/>
    </form>
    <hr/> 
  </React.Fragment>
</div>
  );
}

KegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default KegForm;