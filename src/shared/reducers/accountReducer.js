// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import { Constants as constants } from '../constants/index'
import initialState from './initialState'

const accountReducer = (state = initialState.account, action) => {

  switch (action.type) {

    case constants.ACTIONS.LOGIN.SUCCESS: {

      const account = {...action.data}

      return account
    }

    default:
      return state
  }
}

export default accountReducer
