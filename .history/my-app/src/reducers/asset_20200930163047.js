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
        const filterObject = (obj, filter, filterValue) =>
          Object.keys(obj).reduce(
            (acc, val) =>
              obj[val][filter] === filterValue
                ? acc
                : {
                    ...acc,
                    [val]: obj[val],
                  },
            {}
          );
             console.log(filterObject(state, "assetName", action.payload.value));     
         return filterObject(state, "assetName", action.payload.value);
    default:
      return state
  }
}

export default assets