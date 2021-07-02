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
      id: v4()});
  }

  return (
    <React.Fragment>
    <form onSubmit={handleKegFormSubmission}>
      <input
        type='text'
        name='name'
        placeholder='Name' />
      <input
        type='text'
        name='brand'
        placeholder='Brand' />
      <input
        type='text'
        name='price'
        placeholder='Price' />
      <input
        type='text'
        name='alcoholContent'
        placeholder='Alcohol Content' />
      
      <button type='submit'>Add Keg!</button>
    </form>
  </React.Fragment>
  );
}

KegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default KegForm;