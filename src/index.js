'use strict'

import React from 'react'
import { render } from 'react-dom'
import Main from './main'

const renderApp = (App) => {
  render(
    <div>
      <App />
    </div>,
    document.getElementById('app')
  )
}

renderApp(Main)
