import React from 'react'
import styles from './styles.module.css'

import ClockContext from './ClockContext'

export default class Digit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      generatedDigit: null
    }
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
              let classes = [
                styles.segment,
                c == '0' ? styles.segoff : styles.segon,
                i == 0 || i == 3 || i == 6 ? styles.laying : styles.standing
              ].join(' ')
              let segStyle = {
                backgroundColor: c == '0' ? context.offColor : context.onColor
              }
              let arrTopStyle = {
                borderColor:
                  'transparent transparent ' +
                  (c == '0' ? context.offColor : context.onColor) +
                  ' transparent'
              }
              let arrBotStyle = {
                borderColor:
                  (c == '0' ? context.offColor : context.onColor) +
                  ' transparent transparent transparent'
              }
              return (
                <span className={classes} style={segStyle}>
                  <span className={styles.topArrow} style={arrTopStyle} />
                  <span className={styles.botArrow} style={arrBotStyle} />
                </span>
              )
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
