import React from 'react';
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';
import InventoryDetail from './InventoryDetail';
import EditInventoryForm from './EditInventoryForm';

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibileOnPage: false,
      mainInventoryList: [],
      selectedInventory: null,
      editing: false,
      count: 0
    };
  }

  handleClick = () => {
    if(this.state.selectedInventory != null){
      this.setState({
        formVisibileOnPage: false,
        selectedInventory: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibileOnPage: !prevState.formVisibileOnPage
      }));
    }
  }

  handleAddingNewInventoryToList = (newInventory) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newInventory);
    this.setState({
                  mainInventoryList: newMainInventoryList,
                  formVisibileOnPage: false}
                  );
  }

  handleChangingSelectedInventory = (id) => {
    const selectedInventory = this.state.mainInventoryList.filter(inventory => inventory.id === id)[0];
    this.setState({selectedInventory: selectedInventory});
  }

  handleDeletingInventory = (id) => {
    const newMainInventoryList = this.state.mainInventoryList.filter(inventory => inventory.id !== id);
    this.setState({
      mainInventoryList: newMainInventoryList,
      selectedInventory: null
    });
  }

  handleEditingInventory = (inventoryToEdit) => {
    const editedMainInventory = this.state.mainInventoryList
      .filter(inventory => inventory.id !== this.state.selectedInventory.id)
      .concat(inventoryToEdit);
    this.setState({
      mainInventoryList: editedMainInventory,
      editing: false,
      selectedInventory: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleDecrementingQuantity = () => {
    const inventoryToDecrement = this.state.selectedInventory;
    if (this.state.selectedInventory.quantity !== 0){
        const quantityToDecrement = {
            quantity: inventoryToDecrement.quantity -=1
        }
        this.handleChangingSelectedInventory(quantityToDecrement.id)   
    } else {
        this.handleChangingSelectedInventory(this.state.selectedInventory.id)
    }
}

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditInventoryForm inventory = {this.state.selectedInventory} onEditInventory = {this.handleEditingInventory} />
      buttonText= "Return to List";
    } else if (this.state.selectedInventory != null) {
        currentlyVisibleState = <InventoryDetail 
        inventory = {this.state.selectedInventory} 
        onClickingDelete = {this.handleDeletingInventory} 
        onClickingEdit = {this.handleEditClick}
        onClickingDecrement = {this.handleDecrementingQuantity}
      />
      buttonText= "Return to List";
    }
    else if (this.state.formVisibileOnPage) {
      currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />;
      buttonText = "Return to List";
    } else {
      currentlyVisibleState = <InventoryList  inventoryList={this.state.mainInventoryList} onInventorySelection={this.handleChangingSelectedInventory} />
      buttonText = "Add Inventory";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default InventoryControl;