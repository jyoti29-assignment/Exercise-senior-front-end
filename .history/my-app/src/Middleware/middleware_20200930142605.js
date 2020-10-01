import { LOAD_ASSETS, createAsset, FILTER_BY_VALUE } from '../Redux-Actions/actions'
import 'rxjs/add/operator/filter'
import { mock } from '../resource'
const initialState = {
  appliedFilters: []
};


const assetsMiddleWare = store => next => action => {
  switch(action.type) {
    case LOAD_ASSETS:
      let data = mock
      .filter(asset => asset.id < 400)
      .subscribe((asset) => {
        store.dispatch(createAsset(asset))
    });
      return {
        data,
        ...state
      }
      case FILTER_BY_VALUE: {
        let value = action.payload.value
        mock
        .filter(asset => asset.assetName == value)
        .subscribe((asset) => {
          store.dispatch(createAsset(asset))
        })
      break;
      }
    default:
      break
  }
  return next(action)
}

export default assetsMiddleWare