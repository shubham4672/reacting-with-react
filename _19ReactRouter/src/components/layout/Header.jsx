import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/posts'>Posts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
