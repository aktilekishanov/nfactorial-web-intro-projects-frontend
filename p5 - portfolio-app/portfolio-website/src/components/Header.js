import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/TechStack">Tech Stack</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Contacts">Contacts</Link></li>
        </ul>
      </nav>
    </header>
  );
}


  

export default Header;
