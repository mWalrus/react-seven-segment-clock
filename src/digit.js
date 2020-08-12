import React from 'react'
import styles from './styles.module.css'
import { ReactComponent as Segment } from './img/seg.svg'

import ClockContext from './ClockContext'

export default class Digit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      generatedDigit: null
    }
  }

  componentDidMount() {
    this.interpretDigit()
  }

  componentWillReceiveProps() {
    this.interpretDigit()
  }

  interpretDigit() {
    const num = parseInt(this.props.digit)
    switch (num) {
      case 0:
        this.generateDigit('1110111')
        break
      case 1:
        this.generateDigit('0010010')
        break
      case 2:
        this.generateDigit('1011101')
        break
      case 3:
        this.generateDigit('1011011')
        break
      case 4:
        this.generateDigit('0111010')
        break
      case 5:
        this.generateDigit('1101011')
        break
      case 6:
        this.generateDigit('1101111')
        break
      case 7:
        this.generateDigit('1010010')
        break
      case 8:
        this.generateDigit('1111111')
        break
      case 9:
        this.generateDigit('1111010')
        break

      default:
        break
    }
  }

  generateDigit(conf) {
    const generatedDigit = (
      <ClockContext.Consumer>
        {(context) => (
          <div className={styles.digit}>
            {conf.split('').map((c, i) => {
              const classes = [
                styles.svgSeg,
                i == 0 || i == 3 || i == 6 ? styles.laying : styles.standing,
                c == '0' ? styles.segOn : styles.segOff
              ].join(' ')
              return <Segment className={classes} />
            })}
          </div>
        )}
      </ClockContext.Consumer>
    )
    this.setState({ generatedDigit })
  }

  render() {
    return (
      <span className={styles.digitContainer}>{this.state.generatedDigit}</span>
    )
  }
}
