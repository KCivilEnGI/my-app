import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from './Button';
import './Navbar.css';

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // when click on the thing, handleClick flips the icon status
  const handleClick = () => setClick(!click);
  //closeMobileMenu sets the menu icon back to the initial status after clicking one of the pages
  const closeMobileMenu = () => setClick(false);

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
        <Link to ='/' className='navbar-logo' onClick={closeMobileMenu}>
          Casey's
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to='/blog' className='nav-links' onClick={closeMobileMenu}>Blog</Link></li>
          <li><Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link></li>
          <li><Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link></li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
    </div>
  )
}

export default Navbar;