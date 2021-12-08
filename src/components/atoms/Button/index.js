import React from 'react';
import styles from './Button.module.css';

const Button = ({ title, ...rest}) => {
  return <button className={styles.button} {...rest}>{title}</button>
}

export default Button;