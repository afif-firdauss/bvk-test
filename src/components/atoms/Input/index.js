import React from 'react';
import styles from './Input.module.css';

const Input = ({label, ...rest}) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input {...rest} autoComplete="off"/>
    </div>
  )
}

export default Input;