import React, { useState, useRef, useEffect } from 'react'
import arrowBottom from '../../../assets/arrowBottom.svg'
import styles from './Dropdown.module.css';

const Dropdown = ({label, options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const cardRef = useRef()

  useEffect(() => {
      function handler(event) {
          if(!cardRef.current?.contains(event.target)) {
              setIsOpen(false)
          }
      }
      window.addEventListener('click', handler)
      return () => window.removeEventListener('click', handler)
  }, [])

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div onClick={toggling} ref={cardRef} className="mt-3">
      <label>{label}</label>
      <div className={styles.cardSelect}>
        <div className="d-flex align-items-center">
          <p className={styles.title}>{selectedOption}</p>
        </div>
        <img src={arrowBottom} alt="" styles={{}} />
      </div>
      {isOpen && (
        <ul className={styles.cardOption}>
          {options.map((data, index) => {
            return (
              <li className="d-flex align-items-center py-2 container" style={{cursor: 'pointer'}} key={index} onClick={onOptionClicked(data)}>
                <p className={styles.title}>{data}</p>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
