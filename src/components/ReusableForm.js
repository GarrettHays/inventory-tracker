import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          required='required'
          placeholder='Item Name' />
        <input
          type='text'
          name='brand'
          required='required'
          placeholder='Item Brand' />
        <input
          type='number'
          name='price'
          required='required'
          placeholder='Item Price' />
          <input
          type='number'
          name='weight'
          required='required'
          placeholder='Item Weight' />
          <input
          type='number'
          name='quantity'
          required='required'
          placeholder='Item Quantity' />
          <textarea
          name='description'
          required='required'
          placeholder='Item Description' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;