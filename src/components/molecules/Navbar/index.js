import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/member-list" className={styles.linkTo}>.Org</Link>
      </div>
    </header>
  )
}

export default Navbar;