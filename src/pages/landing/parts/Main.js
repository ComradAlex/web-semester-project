import React from 'react'
import styles from './Main.module.css'

export default function Main() {
  return (
    <div className={styles.containerMain}>
      <div className={styles.wrapperImages}>
        <div className={styles.wrapperImages__left}></div>
        <div className={styles.wrapperImages__right}></div>
      </div>
      <div className={styles.tableOfUsers}>
        <div className={styles.tableOfUsers__headlines}>
          <span>Nickname</span>
          <span>COST</span>
        </div>
        {/* Добавить li-component */}
        <ul className={styles.listOfUsers}>
          <div>
            <li>asd</li>
          </div>
          <div>
            <li>asd</li>
          </div>
          <div>
            <li>asd</li>
          </div>
          <div>
            <li>asd</li>
          </div>
          <div>
            <li>asd</li>
          </div>
          <div>
            <li>asd</li>
          </div>
        </ul>
      </div>
    </div>
  )
}
