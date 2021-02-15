import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

function Nav() {
  return (
    <nav className='Nav'>
      <ul>
        <li>
          <Link className='Nav__link' to='/counter'>
            Counter
          </Link>
        </li>
        <li>
          <Link className='Nav__link' to='/counter-redux'>
            Counter With Redux
          </Link>
        </li>
        <li>
          <Link className='Nav__link' to='/user-list'>
            UserList
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
