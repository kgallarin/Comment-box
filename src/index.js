import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from 'store'
import App from 'components/App'

let store = Store()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
