import { CREATE_ASSET } from '../Redux-Actions/actions'

const assets = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ASSET:
      debugger;
      return {
        ...state,
        [action.payload.id]: { ...state[action.payload.id], ...action.payload }
      }
      case FILTER_BY_VALUE:
        debugger;
        break
    default:
      return state
  }
}

export default assets