import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Lyricizer</h1>
    <nav>
      <Link to="/">
        <li>
          Home
        </li>
      </Link>
    </nav>
  </header>
);

export default Header;
