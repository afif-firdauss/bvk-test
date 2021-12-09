import React from 'react';
import styles from './Member.module.css';

const Member = () => {
  const member = [
    {
      name: 'John Doe',
      position: 'Director',
    },
    {
      name: 'Jane Doe',
      position: 'Manager',
    },
    {
      name: 'John Doe',
      position: 'Director',
    },
    {
      name: 'Jane Doe',
      position: 'Manager',
    },
    {
      name: 'John Doe',
      position: 'Director',
    },
    {
      name: 'Jane Doe',
      position: 'Manager',
    },
  ]

  return (
    <div className={styles.cardWrapper}>
      {
        member.length > 1 ? member.map((data, index) => {
          return (
            <div className={styles.card} key={index}>
              <h3>{data.name}</h3>
              <p>{data.position}</p>
            </div>
          )
        }) : (
          <h3 className="fs-3">No Members</h3>
        )
      }
    </div>
  )
}

export default Member;