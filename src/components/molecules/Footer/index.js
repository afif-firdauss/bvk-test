import React from 'react';
import firebase from '../../../assets/firebase.svg';
import react from '../../../assets/react2.svg';
import redux from '../../../assets/redux.svg';
import axios from '../../../assets/axios.svg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container d-flex align-items-center flex-wrap justify-content-between py-3">
        <p className={styles.logo}>.Org</p>
        <div className={styles.api}>
          <div>
            <p>Built with:</p>
            <div className={styles.image}>
              <img src={react} alt="reactjs" width={60}/>
              <img src={redux} alt="redux" width={50}/>
              <img src={axios} alt="axios" width={60}/>
              <img src={firebase} alt="firebase" width={40}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright &copy; 2021 &minus; <span>Afif Firdaus</span></p>
      </div>
    </footer>
  )
}

export default Footer;