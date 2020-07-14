import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="facebook.com">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="facebook.com">People</a>
        </li>
        <li>
          <a href="facebook.com">Planets</a>
        </li>
        <li>
          <a href="facebook.com">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;