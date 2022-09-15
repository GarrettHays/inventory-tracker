import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props) {
  const { inventory, onClickingDelete, onClickingDecrement } = props;

  return (
    <React.Fragment>
          <h1>Inventory Detail</h1>
          <h3>Brand: {inventory.brand} - Item Name: {inventory.name}</h3>
          <p><em>${inventory.price}</em> - <em>Weight {inventory.weight} lbs</em></p>
          <p>Description: {inventory.description}</p>
          <p>{inventory.quantity} quantity remaining</p>
          <button className='buttonStyle' onClick={ props.onClickingEdit }>Update {inventory.name} Inventory</button>
          <button className='buttonStyle' onClick={() => onClickingDelete(inventory.id) }>Remove {inventory.name} Inventory</button>
          <button className='buttonStyle' onClick={() => onClickingDecrement(inventory.id) }>Sell one {inventory.name}</button>
          <hr/>
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func
}

export default InventoryDetail;