import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="home">PARKING MANAGEMENT SYSTEM</Link>
        <ul>
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
