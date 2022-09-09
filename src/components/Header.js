import React from "react";


function Header() {

  const headerStyles = {
    textAlign: 'center',
    textDecoration: 'underline'
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1>Inventory Tracker</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;