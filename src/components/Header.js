import React from "react";


function Header() {

  const headerStyles = {
    textAlign: 'center',
    textDecoration: 'underline dotted'
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1>The Inventory Tracker</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;