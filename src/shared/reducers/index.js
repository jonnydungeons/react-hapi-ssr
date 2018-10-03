import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import accountReducer from './accountReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  account: accountReducer
})

export default rootReducer
