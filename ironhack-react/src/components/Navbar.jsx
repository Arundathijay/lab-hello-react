import React from "react";
import logo from "../images/menu-top-xs.png";
import menu from "../images/ironhack-logo-xs.png";

function Navbar() {
  return (
    <div className='navbar'>
      <img id='menu' src={logo} alt='logo' />

      <img id='logo' src={menu} alt='menu' />
    </div>
  );
}

export default Navbar;
