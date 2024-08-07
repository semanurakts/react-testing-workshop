<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {init} from './utils/api'

import './index.css'

if (window.Cypress) {
  init({baseURL: window.Cypress.env('API_URL').trim()})
} else {
  init()
}

=======
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {init} from './utils/api'

import './index.css'

if (window.Cypress) {
  init({baseURL: window.Cypress.env('API_URL').trim()})
} else {
  init()
}

>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
ReactDOM.render(<App />, document.getElementById('⚛️'))