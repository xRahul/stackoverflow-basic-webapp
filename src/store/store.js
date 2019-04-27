// import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import {
  composeWithDevTools
} from 'redux-devtools-extension'
import {
  applyMiddleware,
  createStore
} from 'redux'
import thunkMiddleware from 'redux-thunk'
// const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  const middlewares = [
    // loggerMiddleware,
    thunkMiddleware
  ]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}