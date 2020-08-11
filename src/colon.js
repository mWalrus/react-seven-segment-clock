import React from 'react'
import styles from './styles.module.css'

export default class Colon extends React.Component {
  render() {
    const toggle = this.props.toggle ? styles.colOn : styles.colOff
    return (
      <div className={styles.colon}>
        <span className={styles.colonDot + ' ' + toggle}></span>
        <span className={styles.colonDot + ' ' + toggle}></span>
      </div>
    )
  }
}
