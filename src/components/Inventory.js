import React from "react";
import PropTypes from "prop-types";

function Inventory(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenInventoryClicked(props.id)}>
        <h3>Brand: {props.brand} - {props.name}</h3>
        <p><em>${props.price}</em></p>
        <p>{props.quantity} Inventory Remaining</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Inventory.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenInventoryClicked: PropTypes.func
};

export default Inventory;