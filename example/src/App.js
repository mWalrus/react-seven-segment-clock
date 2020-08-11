import React from 'react'

import Clock from 'react-seven-segment-clock'
import 'react-seven-segment-clock/dist/index.css'

const App = () => {
  return (
    <Clock width='50%' onColor='#FFFD82' offColor='#181925' bgColor='#2D3047' />
  )
}

export default App
