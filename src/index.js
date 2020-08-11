import React from 'react'
import styles from './styles.module.css'

import Section from './section'
import Colon from './colon'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hour: '00',
      minute: '00',
      colonToggle: true
    }
  }

  componentDidMount() {
    this.tick()
  }

  componentWillUnmount() {
    clearInterval(this.TIMERID)
  }

  tick() {
    this.TIMERID = setInterval(() => {
      this.setState({
        hour: new Date().getHours().toString(),
        minute: new Date().getMinutes().toString(),
        colonToggle: !this.state.colonToggle
      })
    }, 1000)
  }

  render() {
    const width = this.props.width
    const height = '15em'
    console.log(width)
    console.log(height)
    return (
      <div className={styles.clockContainer}>
        <div className={styles.clock} style={{ width, height }}>
          <Section digits={this.state.hour} />
          <Colon toggle={this.state.colonToggle} />
          <Section digits={this.state.minute} />
        </div>
      </div>
    )
  }
}
