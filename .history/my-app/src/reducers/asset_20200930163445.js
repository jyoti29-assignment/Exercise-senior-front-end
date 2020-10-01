import { CREATE_ASSET, FILTER_BY_VALUE } from '../Redux-Actions/actions';

const assets = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ASSET:
      return {
        ...state,
        [action.payload.id]: { ...state[action.payload.id], ...action.payload }
      }
      case FILTER_BY_VALUE:
        debugger;
        return {
          ...state,
          [action.payload.val]: { ...state[action.payload.val], ...action.payload }
        }
        
    default:
      return state
  }
}

export default assets