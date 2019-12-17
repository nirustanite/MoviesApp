import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools';
import * as reducers from './src/reducers'

const reducer = combineReducers(Object.assign({}, reducers))

const enhancer = composeWithDevTools(
  applyMiddleware(ReduxThunk),
)

const store = createStore(reducer, enhancer)

export default store