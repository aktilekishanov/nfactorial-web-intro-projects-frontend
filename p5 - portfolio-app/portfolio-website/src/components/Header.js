import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-box">
        <p className='header-name'>Aktilek Ishanov</p>
        <div className='nav'>
            <p><Link to="/" className='nav-link'>Home</Link></p>
            <p><Link to="/About" className='nav-link'>About</Link></p>
            <p><Link to="/Projects" className='nav-link'>Projects</Link></p>
            <p><Link to="/Contacts" className='nav-link'>Contacts</Link></p>
        </div>
      </div>
    </header>
  );
}


  

export default Header;
