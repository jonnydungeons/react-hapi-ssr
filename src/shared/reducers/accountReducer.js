// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import { Constants as constants } from '../constants/index'
import initialState from './initialState'

const accountReducer = (state = initialState.account, action) => {

  switch (action.type) {

    case constants.ACTIONS.LOGIN.SUCCESS: {
      return action.data
    }

    default:
      return state
  }
}

export default accountReducer
