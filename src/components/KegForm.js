import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function KegForm(props){

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
    <React.Fragment>
    <form onSubmit={handleKegFormSubmission}>
      <input
        type='text'
        name='name'
        placeholder='Name' 
        required />
      <input
        type='text'
        name='brand'
        placeholder='Brand' 
        required />
      <input
        type='text'
        name='price'
        placeholder='Price' 
        required />
      <input
        type='text'
        name='alcoholContent'
        placeholder='Alcohol Content' 
        required />
      <input
        type='hidden'
        name='pintStock'/>
        
      <button type='submit'>Add Keg!</button>
    </form>
  </React.Fragment>
  );
}

KegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default KegForm;