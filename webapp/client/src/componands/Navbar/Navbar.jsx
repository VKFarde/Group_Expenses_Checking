import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [activelogin, setActivelogin] = useState(true);
  const [activesignup, setActivesignup] = useState(true);

  return (
    <div className="nav-container">
      <div className="hooome">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
        </ul>
      </div>
      <div className="loginsignup">
        <ul>
          <li onClick={() => setActivelogin(!activelogin)}>
            <Link to="/login">Login</Link>
          </li>
          <li onClick={() => setActivesignup(!activesignup)}>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
