import React from 'react'
import styles from './styles.module.css'

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
        this.generateDigit('1011101')
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

  generateDigit() {
    const config = arguments['0'].split('')

    const generatedDigit = (
      <div className={styles.digit}>
        {config.map((c, i) => {
          let classes = [styles.segment]
          // decide if on or off
          if (c == '0') {
            classes.push(styles.segoff)
          } else {
            classes.push(styles.segon)
          }
          // decide laying or standing pos
          if (i == 0 || i == 3 || i == 6) {
            classes.push(styles.laying)
          } else {
            classes.push(styles.standing)
          }

          return <span className={classes.join(' ')} />
        })}
      </div>
    )
    this.setState({ generatedDigit })
  }

  render() {
    return (
      <span className={styles.digitContainer}>{this.state.generatedDigit}</span>
    )
  }
}
