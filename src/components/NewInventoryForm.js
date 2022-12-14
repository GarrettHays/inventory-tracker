import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";


function NewInventoryForm(props) {

  function handleNewInventoryFormSubmission(event){
    event.preventDefault();
    props.onNewInventoryCreation({name: event.target.name.value, brand: event.target.brand.value, price: parseInt(event.target.price.value), weight: parseInt(event.target.weight.value), quantity: parseInt(event.target.quantity.value), description: event.target.description.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewInventoryFormSubmission}
        buttonText="Submit"
      />
    </React.Fragment>
  );
}

NewInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default NewInventoryForm;