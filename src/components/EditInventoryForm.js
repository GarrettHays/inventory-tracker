import React from "react";
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";

function EditInventoryForm(props) {

  const { inventory } = props;

  function handleEditInventoryFormSubmission(event) {
    event.preventDefault();
    props.onEditInventory({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, weight: event.target.weight.value, description: event.target.description.value, quantity: event.target.quantity.value, id: inventory.id});
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditInventoryFormSubmission}
        buttonText= "Submit"
      />
    </React.Fragment>
  )
}

EditInventoryForm.propTypes = {
  inventory: PropTypes.object,
  onEditInventory: PropTypes.func
};

export default EditInventoryForm;