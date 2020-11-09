import React from 'react'
import styles from './User.module.css'

export default function User() {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}></div>
      </div>
      <div className={styles.userInfo}>
        <p>Nickname</p>
        <div className={styles.totalCost}>
          <span>
            Total cost:
            <span>&nbsp;&nbsp;1000$</span>
          </span>
        </div>
      </div>
      <div></div>
    </div>
  )
}