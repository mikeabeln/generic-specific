import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.scss'

import Routes from './routes.jsx'

export const renderApp = () => {
    ReactDOM.render(<Routes />, document.getElementById('root'))
}

renderApp()
