import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

import Digit from './digit'

export default class Section extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const digits =
      this.props.digits.length > 1 ? this.props.digits : '0' + this.props.digits
    return (
      <div className={styles.section}>
        <Digit digit={digits[0]} />
        <Digit digit={digits[1]} />
      </div>
    )
  }
}

Component.propTypes = {
  digits: PropTypes.string
}
