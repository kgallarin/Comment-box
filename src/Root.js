import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import reducers from 'reducers'

let composeEnhancers = compose;
let middlewares = [reduxThunk,reduxPromise]

if(process.env.NODE_ENV !== 'production'){
  const logger = reduxLogger

  middlewares = [...middlewares,logger]

  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
