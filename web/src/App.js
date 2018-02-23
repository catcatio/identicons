import React, { Component } from 'react'
import './App.css'

import Head from './prototypes/head'
import Eyes from './prototypes/eyes'
import Ears from './prototypes/ears'
import Mouth from './prototypes/mouth'

class App extends Component {
  render () {
    return (
      <svg viewBox='0 0 640 640' style={{ transformOrigin: 'top left', transform: `scaleX(0.1) scaleY(0.1)` }}>
        <g>
          <Head />
          <Eyes />
          <Ears />
          <Mouth />
        </g>
      </svg>
    )
  }
}

export default App
