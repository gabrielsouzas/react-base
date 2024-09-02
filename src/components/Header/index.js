import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/" aria-label="Home">
        <FaHome size={24} />
      </Link>
      <Link to="login" aria-label="User">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/" aria-label="SignOut">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
