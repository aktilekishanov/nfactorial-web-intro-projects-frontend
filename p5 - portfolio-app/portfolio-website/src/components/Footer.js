import React from 'react';

function Footer() {
  return (
    <footer className='footer-box'>
      <div className='footer-content'>
        <p>Made with ❤️ at nFactorial in 2024.</p>
        <p>Copyright © {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;