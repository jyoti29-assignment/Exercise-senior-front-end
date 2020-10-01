import { CREATE_ASSET, FILTER_BY_VALUE } from '../Redux-Actions/actions';
import { mock } from '../resource'

const assets = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ASSET:
      return {
        ...state,
        [action.payload.id]: { ...state[action.payload.id], ...action.payload }
      }
      case FILTER_BY_VALUE:
        debugger;
        const searchTerm  = action.payload.value;
        mock
        .filter(asset => asset.assetName< 400)
        .subscribe((asset) => {
          store.dispatch(createAsset(asset))
        })
        return {
          ...state,
          searchTerm: searchTerm,
          mock: searchTerm
              ? mock.filter(
                  data =>
                  data.assetName.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                  -1,
              )
              : mock,
          };
    default:
      return state
  }
}

export default assets