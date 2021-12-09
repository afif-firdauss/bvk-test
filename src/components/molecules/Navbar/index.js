import React from 'react';
import { Button } from '../../atoms'
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.navbar}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/member-list" className={styles.linkTo}>.Org</Link>
        <Button className={styles.navbarBtn} title="Sign out" onClick={() => navigate('/login')} />
      </div>
    </header>
  )
}

export default Navbar;