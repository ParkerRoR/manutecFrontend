import actions from './actions'

const INITIAL_STATE = {}


export default function dataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
