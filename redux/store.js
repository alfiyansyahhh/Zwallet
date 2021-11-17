import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import userReducer from './reducer/users'
import transactionReducer from './reducer/transactions'

const reducers = combineReducers({
  user: userReducer,
  transactions: transactionReducer
})

const middleware = applyMiddleware(thunk, logger)
const store = createStore(reducers, middleware)

export default store