import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from './Button';
import Dropdown from "./Dropdown";
import './Navbar.css';


function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  // when click on the thing, handleClick flips the icon status
  const handleClick = () => setClick(!click);
  //closeMobileMenu sets the menu icon back to the initial status after clicking one of the pages
  const closeMobileMenu = () => setClick(false);
  // handleDropdown is used when switching the function of dropdown menu from hovering to clicking
  // the code will need to be changed if using this one
  // const handleDropdown = () => setDropdown(!dropdown);

  // when use onMouseEnter and onMouseLeave for dropdown, enable these 2 and add codes to the corresponding elements
  const onMouseEnter = () => {
    if (window.innerWidth <= 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth <= 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <Link to='/my-app/' className='navbar-logo' onClick={closeMobileMenu}>
          Casey's
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' >
            <Link to='/my-app/about' className='nav-links' onClick={closeMobileMenu}>About Us</Link>
          </li>
          <li  className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link className='nav-links' onClick={closeMobileMenu}>
              Blog&nbsp;{dropdown ? <i className='fa-solid fa-angle-up' style={{color:"#ffffff"}}/> : <i className='fa-solid fa-angle-down' style={{color:"#ffffff"}}/> }
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item' ><Link to='/my-app/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link></li>
          <li className='nav-item' ><Link to='/my-app/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link></li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
    </div>
  )
}

export default Navbar;