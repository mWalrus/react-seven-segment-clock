import React from 'react'
import styles from './styles.module.css'
import ClockContext from './ClockContext'

import Section from './section'
import Colon from './colon'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hour: new Date().getHours().toString(),
      minute: new Date().getMinutes().toString(),
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
    const height = 'calc(' + width + '/ 2)'
    return (
      <div className={styles.clockContainer}>
        <div
          className={styles.clock}
          style={{ width, height, backgroundColor: this.props.bgColor }}
        >
          <ClockContext.Provider
            value={{
              onColor: this.props.onColor,
              offColor: this.props.offColor
            }}
          >
            <Section digits={this.state.hour} />
            <Colon toggle={this.state.colonToggle} />
            <Section digits={this.state.minute} />
          </ClockContext.Provider>
        </div>
      </div>
    )
  }
}
