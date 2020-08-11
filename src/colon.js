import React from 'react'
import styles from './styles.module.css'

import ClockContext from './ClockContext'

export default class Colon extends React.Component {
  render() {
    const t = this.props.toggle
    return (
      <ClockContext.Consumer>
        {(c) => (
          <div className={styles.colon}>
            <span
              className={styles.colonDot}
              style={{ backgroundColor: t ? c.onColor : c.offColor }}
            ></span>
            <span
              className={styles.colonDot}
              style={{ backgroundColor: t ? c.onColor : c.offColor }}
            ></span>
          </div>
        )}
      </ClockContext.Consumer>
    )
  }
}
