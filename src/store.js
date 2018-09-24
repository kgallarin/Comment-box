import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import reducers from 'reducers'

let composeEnhancers = compose;
let middlewares = [reduxThunk]

if(process.env.NODE_ENV !== 'production'){
  const logger = reduxLogger

  middlewares = [...middlewares,logger]

  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
}

export default () =>
  createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(...middlewares))
  )
