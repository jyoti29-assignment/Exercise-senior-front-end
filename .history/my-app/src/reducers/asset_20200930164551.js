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
        const filteredByKey = Object.fromEntries(Object.entries(state).filter(([key, value]) => key === 'assetName' && value === action.payload.value));
        state = filteredByKey
        return {
          return ...state
        }
        console.log(filteredByKey);
    default:
      return state
  }
}

export default assets